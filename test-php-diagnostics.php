<?php
/**
 * Quick PHP Diagnostic Script
 * Tests if PHP environment is properly configured for the chat system
 */

header('Content-Type: text/html; charset=UTF-8');
?>
<!DOCTYPE html>
<html>
<head>
    <title>SmartHub PHP Diagnostics</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 900px; margin: 50px auto; padding: 20px; }
        .success { color: green; font-weight: bold; }
        .error { color: red; font-weight: bold; }
        .warning { color: orange; font-weight: bold; }
        .test { background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
        pre { background: #333; color: #0f0; padding: 10px; overflow: auto; }
        h2 { border-bottom: 2px solid #0066CC; padding-bottom: 10px; }
    </style>
</head>
<body>
    <h1>🔧 SmartHub PHP Diagnostics</h1>

    <div class="test">
        <h2>Test 1: PHP Version</h2>
        <?php
        $phpVersion = phpversion();
        if (version_compare($phpVersion, '7.4', '>=')) {
            echo "<p class='success'>✅ PHP Version: $phpVersion (Good!)</p>";
        } else {
            echo "<p class='error'>❌ PHP Version: $phpVersion (Need 7.4+)</p>";
        }
        ?>
    </div>

    <div class="test">
        <h2>Test 2: Required PHP Extensions</h2>
        <?php
        $extensions = ['curl', 'json', 'mbstring'];
        foreach ($extensions as $ext) {
            if (extension_loaded($ext)) {
                echo "<p class='success'>✅ $ext extension loaded</p>";
            } else {
                echo "<p class='error'>❌ $ext extension NOT loaded</p>";
            }
        }
        ?>
    </div>

    <div class="test">
        <h2>Test 3: Config Files Exist</h2>
        <?php
        $files = [
            'teacher-chat/config.php',
            'parent-chat/config.php',
            'teacher-chat/chat.php',
            'parent-chat/chat.php'
        ];

        foreach ($files as $file) {
            if (file_exists($file)) {
                echo "<p class='success'>✅ $file exists</p>";

                // Check if it's readable
                if (is_readable($file)) {
                    echo "<p style='margin-left: 20px;'>→ File is readable</p>";
                } else {
                    echo "<p class='error' style='margin-left: 20px;'>→ File NOT readable (check permissions)</p>";
                }
            } else {
                echo "<p class='error'>❌ $file NOT found</p>";
            }
        }
        ?>
    </div>

    <div class="test">
        <h2>Test 4: Load Config File</h2>
        <?php
        if (file_exists('teacher-chat/config.php')) {
            echo "<p>Attempting to load teacher-chat/config.php...</p>";

            // Capture any errors
            ob_start();
            try {
                require_once 'teacher-chat/config.php';
                $output = ob_get_clean();

                if (defined('GROQ_API_KEY')) {
                    $keyPreview = substr(GROQ_API_KEY, 0, 7) . '...';
                    if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
                        echo "<p class='error'>❌ API key not configured (still placeholder)</p>";
                    } else {
                        echo "<p class='success'>✅ Config loaded! API key: $keyPreview</p>";
                    }
                } else {
                    echo "<p class='error'>❌ GROQ_API_KEY not defined</p>";
                }

                if (defined('GROQ_MODEL')) {
                    echo "<p class='success'>✅ Model: " . GROQ_MODEL . "</p>";
                }

                if (defined('API_KEY_CONFIGURED')) {
                    if (API_KEY_CONFIGURED) {
                        echo "<p class='success'>✅ API key validation: PASS</p>";
                    } else {
                        echo "<p class='error'>❌ API key validation: FAIL</p>";
                    }
                }

                if (!empty($output)) {
                    echo "<p class='warning'>⚠️ Output from config file:</p>";
                    echo "<pre>" . htmlspecialchars($output) . "</pre>";
                }

            } catch (Exception $e) {
                ob_end_clean();
                echo "<p class='error'>❌ Error loading config: " . htmlspecialchars($e->getMessage()) . "</p>";
            }
        } else {
            echo "<p class='error'>❌ Config file not found</p>";
        }
        ?>
    </div>

    <div class="test">
        <h2>Test 5: Test Groq API Connection</h2>
        <?php
        if (defined('GROQ_API_KEY') && GROQ_API_KEY !== 'YOUR_GROQ_API_KEY_HERE') {
            echo "<p>Testing API connection to Groq...</p>";

            $ch = curl_init('https://api.groq.com/openai/v1/chat/completions');

            if ($ch === false) {
                echo "<p class='error'>❌ cURL initialization failed</p>";
            } else {
                $testPayload = json_encode([
                    'model' => 'llama-3.3-70b-versatile',
                    'messages' => [
                        ['role' => 'user', 'content' => 'Say hello']
                    ],
                    'max_tokens' => 50
                ]);

                curl_setopt_array($ch, [
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_POST => true,
                    CURLOPT_POSTFIELDS => $testPayload,
                    CURLOPT_HTTPHEADER => [
                        'Content-Type: application/json',
                        'Authorization: Bearer ' . GROQ_API_KEY
                    ],
                    CURLOPT_TIMEOUT => 10
                ]);

                $response = curl_exec($ch);
                $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                $curlError = curl_error($ch);
                curl_close($ch);

                if ($response === false) {
                    echo "<p class='error'>❌ cURL Error: " . htmlspecialchars($curlError) . "</p>";
                } else {
                    echo "<p class='success'>✅ API responded with HTTP code: $httpCode</p>";

                    if ($httpCode === 200) {
                        echo "<p class='success'>✅ API connection working!</p>";
                        $data = json_decode($response, true);
                        if (isset($data['choices'][0]['message']['content'])) {
                            echo "<p>AI Response: " . htmlspecialchars($data['choices'][0]['message']['content']) . "</p>";
                        }
                    } else {
                        echo "<p class='error'>❌ API Error</p>";
                        echo "<pre>" . htmlspecialchars(substr($response, 0, 500)) . "</pre>";
                    }
                }
            }
        } else {
            echo "<p class='warning'>⚠️ Skipped - API key not configured</p>";
        }
        ?>
    </div>

    <div class="test">
        <h2>Test 6: PHP Error Log (if available)</h2>
        <?php
        $errorLog = ini_get('error_log');
        if ($errorLog && file_exists($errorLog)) {
            echo "<p>Error log location: $errorLog</p>";
            echo "<p class='warning'>Check with your hosting provider for access to PHP error logs</p>";
        } else {
            echo "<p>Error log location not accessible via this script</p>";
            echo "<p class='warning'>Check OVH cPanel → Error Logs for PHP errors</p>";
        }
        ?>
    </div>

    <h2>📋 Summary</h2>
    <p>If all tests pass above, the chat.php should work. If you still get 500 error:</p>
    <ol>
        <li>Check OVH cPanel → Error Logs for the actual PHP error</li>
        <li>Make sure config.php files have correct permissions (644 or 600)</li>
        <li>Verify chat.php files uploaded correctly</li>
    </ol>

    <h2>🔍 Next Step</h2>
    <p><strong>Check OVH Error Logs:</strong></p>
    <ul>
        <li>Go to cPanel → "Errors" or "Error Log"</li>
        <li>Look for recent PHP errors from teacher-chat/chat.php</li>
        <li>The error message will tell us exactly what's wrong</li>
    </ul>
</body>
</html>

# Groq Models Reference - 2025

**Last Updated:** November 5, 2025

---

## Key Point: ALL Models Are Free (with rate limits)

Groq doesn't restrict models by tier. **ALL models are available on the free tier** with rate limits. You only pay for higher throughput, not access to specific models.

---

## Recommended Models for SmartHub

### 🏆 **Primary Choice: llama-3.3-70b-versatile**
- **Context Window:** 128k tokens
- **Best For:** General conversation, Q&A, customer support
- **Speed:** Fast
- **Quality:** Excellent
- **SmartHub Status:** ✅ **Currently configured**

### ⚡ **Backup: llama-3.1-8b-instant**
- **Context Window:** 128k tokens
- **Best For:** When speed is critical
- **Speed:** Very fast
- **Quality:** Good (smaller model)
- **Use Case:** If you need even faster responses

### 🆕 **Newest: Llama 4 Models**
- **llama-4-scout** - General purpose
- **llama-4-maverick** - Advanced reasoning
- **Status:** Just released, available on free tier
- **Note:** May want to test these after launch

---

## Free Tier Rate Limits

**Typical limits for LLaMA models:**

| Metric | Free Tier Limit | SmartHub Impact |
|--------|-----------------|-----------------|
| **RPM** (Requests/Min) | 30 | 30 chat messages per minute |
| **RPD** (Requests/Day) | 14,400 | ~600 conversations/day |
| **TPM** (Tokens/Min) | 30,000 | Plenty for responses |

**Translation for SmartHub:**
- ✅ Can handle ~600 full chat conversations per day
- ✅ More than sufficient for initial launch
- ✅ Completely free at this usage level
- ✅ Upgrade only if you exceed limits consistently

---

## All Available Models (2025)

### **LLaMA Family**
- ✅ `llama-3.3-70b-versatile` (128k) ← **We're using this**
- ✅ `llama-3.1-8b-instant` (128k)
- ✅ `llama-4-scout` (newest)
- ✅ `llama-4-maverick` (newest)
- `llama-3.2-1b-preview`
- `llama-3.2-3b-preview`
- `llama-3.2-11b-vision-preview`
- `llama-3.2-90b-vision-preview`

### **DeepSeek Models** (Reasoning)
- `deepseek-r1-distill-llama-70b` (128k)
- `deepseek-r1-distill-qwen-32b` (128k)

### **Qwen Models** (Multilingual)
- `qwen-2.5-32b` (128k) - Good for Chinese/French
- `qwen-2.5-coder-32b` (128k) - Code focused
- `qwen3-32b`

### **Other Models**
- `openai/gpt-oss-120b`
- `whisper-large-v3-turbo` (Speech recognition)

### **Recently Deprecated** (Don't use these)
- ❌ `llama3-70b-8192` → Use `llama-3.3-70b-versatile`
- ❌ `llama3-8b-8192` → Use `llama-3.1-8b-instant`
- ❌ `gemma2-9b-it` → Deprecated
- ❌ `mixtral-8x7b-32768` → Deprecated

---

## How to Change Models

To switch to a different model:

1. **Open config file:**
   - `teacher-chat/config.php`
   - `parent-chat/config.php`

2. **Find this line (~line 25):**
   ```php
   define('GROQ_MODEL', 'llama-3.3-70b-versatile');
   ```

3. **Change to desired model:**
   ```php
   define('GROQ_MODEL', 'llama-4-scout');  // Example: Use newest Llama 4
   ```

4. **Save and re-upload to server**

---

## When to Consider Different Models

### Use **llama-3.1-8b-instant** if:
- You need faster responses (speed > quality)
- Users are getting timeout errors
- Rate limits are being hit frequently

### Use **llama-4-scout/maverick** if:
- You want to test the newest models
- You need better reasoning capabilities
- Current model isn't meeting quality expectations

### Use **qwen-2.5-32b** if:
- You need better multilingual support
- French language quality isn't good enough
- You're expanding to other languages

### Use **deepseek-r1** models if:
- You need complex reasoning
- Math or logic heavy queries
- Multi-step problem solving

---

## Cost Analysis

### Free Tier (Current)
- **Cost:** $0/month
- **Capacity:** 14,400 requests/day
- **Perfect for:** Initial launch, testing, most small businesses
- **When to upgrade:** Consistently hitting rate limits

### If You Outgrow Free Tier

Groq's paid pricing (On-Demand):
- **LLaMA 3.3 70B:** ~$0.27 per 1M input tokens
- **Example:** 1,000 conversations ≈ $5-10/month
- **Much cheaper than:** Hiring support staff, AWS/Azure alternatives

**For SmartHub:**
- Start with free tier
- Monitor usage weekly at console.groq.com
- Upgrade only if needed (likely many months away)

---

## Model Selection Flowchart

```
Start Here
    ↓
Need basic chat support? → YES → Use llama-3.3-70b-versatile ✅
    ↓ NO
Need fastest possible? → YES → Use llama-3.1-8b-instant
    ↓ NO
Need complex reasoning? → YES → Use deepseek-r1-distill-llama-70b
    ↓ NO
Need better French? → YES → Try qwen-2.5-32b
    ↓ NO
Want newest features? → YES → Try llama-4-scout/maverick
```

---

## Monitoring Your Usage

### Check Usage:
1. Log in to https://console.groq.com
2. Go to Dashboard → Usage
3. View:
   - Requests per day
   - Tokens consumed
   - Which models used
   - Rate limit status

### Set Up Alerts:
- Monitor weekly (initially)
- If usage > 80% of limit, consider:
  - Implementing rate limiting in your code
  - Upgrading to paid tier
  - Analyzing usage patterns

---

## Testing Different Models

Want to test a different model without changing production?

**Option 1: Test Locally**
1. Change model in local config.php
2. Test with various questions
3. Compare response quality
4. Deploy best option

**Option 2: Create Test Endpoints**
1. Duplicate chat.php to chat-test.php
2. Use different model in test version
3. Compare side-by-side
4. Switch when confident

---

## FAQs

**Q: Will my free tier expire?**
A: No, Groq's free tier doesn't expire. Use it forever!

**Q: Can I use multiple models?**
A: Yes, but you'd need separate API handlers. Start with one model for simplicity.

**Q: What if I hit rate limits?**
A: Users will see error message. Implement retry logic or upgrade tier.

**Q: Is llama-3.3 really better than llama-3.1?**
A: Yes, it's the newer version with improvements. Always use latest.

**Q: Should I use Llama 4 right now?**
A: It's very new (just released). Test it, but llama-3.3 is proven stable.

**Q: Can I switch models after launch?**
A: Absolutely! Just change the config and re-upload. Takes 2 minutes.

---

## Recommended Strategy for SmartHub

### Phase 1 (Launch - Month 1):
- ✅ Use: `llama-3.3-70b-versatile`
- Monitor daily usage
- Collect user feedback
- Document any issues

### Phase 2 (Month 2-3):
- Analyze usage patterns
- Test llama-4 models if curious
- Refine system prompts
- Stay on free tier unless limits hit

### Phase 3 (Month 3+):
- If usage grows, consider paid tier
- Or implement rate limiting
- Evaluate ROI vs. cost
- Optimize based on real data

---

## Current SmartHub Configuration

**✅ Your config files are now set to:**

```php
define('GROQ_MODEL', 'llama-3.3-70b-versatile');
```

**This is perfect for:**
- ✅ Teacher support chat
- ✅ Parent consultation chat
- ✅ Bilingual support (French/English)
- ✅ Tunisian education context
- ✅ Professional, accurate responses

**No changes needed unless you want to experiment!**

---

## Resources

- **Groq Console:** https://console.groq.com
- **Model Documentation:** https://console.groq.com/docs/models
- **Rate Limits:** https://console.groq.com/docs/rate-limits
- **Pricing:** https://groq.com/pricing
- **Community:** https://community.groq.com

---

**Bottom Line:** You're using the best free model available. Nothing to worry about! 🎉

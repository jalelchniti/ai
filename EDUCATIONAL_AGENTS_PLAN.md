# Educational Chat Agents Implementation Plan

**Project:** SmartHub AI Educational Support System
**Feature:** Subject-Specific Chat Agents (English & French)
**Target Users:** Students (Learners)
**Created:** November 6, 2025
**Status:** Planning Phase

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Phase 1: Document Analysis & Outline Creation](#phase-1-document-analysis--outline-creation)
3. [Phase 2: Chat Agent Architecture Design](#phase-2-chat-agent-architecture-design)
4. [Phase 3: English Language Agent Development](#phase-3-english-language-agent-development)
5. [Phase 4: French Language Agent Development](#phase-4-french-language-agent-development)
6. [Phase 5: Testing & Refinement](#phase-5-testing--refinement)
7. [Phase 6: Deployment & Integration](#phase-6-deployment--integration)
8. [Appendices](#appendices)

---

## Project Overview

### Objectives
Create two specialized AI chat agents that assist students with language learning in English and French, covering:
- **Language Skills:** Grammar and vocabulary instruction
- **Reading Comprehension:** Text analysis and understanding
- **Guided Writing:** Writing assistance and feedback

### Key Features
- **Grade-Aware:** Each agent asks for the student's grade level and adapts content accordingly
- **Native Language Communication:** English agent speaks English, French agent speaks French
- **Accessible Language:** Both agents use simple, age-appropriate language
- **Curriculum-Aligned:** Based on teachers' manuals for each grade and subject

### Success Criteria
- ✅ Comprehensive outlines of all PDF teacher manuals completed
- ✅ Agents accurately identify and respond to student grade levels
- ✅ Content aligns with curriculum standards for each grade
- ✅ Language complexity is appropriate for target age groups
- ✅ Students receive clear, helpful, and encouraging responses
- ✅ Agents successfully assist with grammar, reading, and writing tasks

---

## Phase 1: Document Analysis & Outline Creation

**Duration:** 3-5 days
**Objective:** Read, understand, and create comprehensive outlines of all PDF teacher manuals

### Section 1.1: PDF Document Discovery

#### Task 1.1.1: Locate and Catalog PDF Files
- [ ] Search repository for all PDF files
- [ ] Identify each document by:
  - Subject (English, French, Math, Science, etc.)
  - Grade level (1st, 2nd, 3rd, etc.)
  - Document type (Teacher manual, curriculum guide, etc.)
- [ ] Create master inventory list
- [ ] Verify all PDFs are readable and complete

**Deliverable:** `pdf-inventory.md` - Complete catalog of all educational materials

#### Task 1.1.2: Prioritize Relevant Documents
- [ ] Identify English subject teacher manuals
- [ ] Identify French subject teacher manuals
- [ ] Sort by grade level (ascending order)
- [ ] Flag any missing grade levels
- [ ] Note supplementary materials (workbooks, assessment guides)

**Deliverable:** Prioritized reading list for Phase 1

### Section 1.2: Document Analysis - English Subject

#### Task 1.2.1: Read English Teacher Manuals
For each grade level:
- [ ] Read complete teacher manual
- [ ] Identify key learning objectives
- [ ] Note grammar topics covered
- [ ] Document vocabulary themes
- [ ] List reading comprehension strategies taught
- [ ] Identify writing instruction methods
- [ ] Extract example exercises and activities

#### Task 1.2.2: Create English Subject Outlines
For each grade level, create comprehensive outline including:

```markdown
# English - Grade [X] - Teacher Manual Outline

## Document Overview
- **Title:** [Full title]
- **Grade Level:** [X]
- **Academic Year:** [If specified]
- **Total Pages:** [X]

## Learning Objectives
### Annual Goals
- [Objective 1]
- [Objective 2]
...

### Semester/Term Breakdown
#### Term 1
- [Objectives]
#### Term 2
- [Objectives]
...

## Grammar & Language Section
### Topics Covered
1. **[Topic Name]** (Week X-Y)
   - Concepts introduced
   - Teaching methods
   - Practice activities
   - Assessment criteria

### Vocabulary Themes
1. **[Theme Name]** (Week X-Y)
   - Word lists
   - Context usage
   - Activities

### Common Challenges & Solutions
- [Challenge 1]: [Suggested approach]
...

## Reading Comprehension Section
### Text Types Studied
- [Type 1]: [Description, examples]
...

### Comprehension Strategies
1. **[Strategy Name]**
   - When to use
   - How to teach
   - Student practice methods

### Reading Levels
- Beginning of year: [Level]
- End of year target: [Level]

## Guided Writing Section
### Writing Types Taught
1. **[Type Name]** (Week X-Y)
   - Structure
   - Key elements
   - Rubric criteria

### Writing Process Steps
1. [Step 1]
2. [Step 2]
...

### Common Writing Errors & Corrections
- [Error type]: [How to address]

## Assessment Methods
### Formative Assessments
- [Method 1]
...

### Summative Assessments
- [Method 1]
...

## Pedagogical Approaches
### Recommended Teaching Methods
- [Method 1]: [Description]
...

### Differentiation Strategies
- For struggling learners: [Strategies]
- For advanced learners: [Strategies]

## Resources & Materials
### Required Materials
- [Material 1]
...

### Recommended Supplementary Resources
- [Resource 1]
...

## Notes for AI Agent Development
### Key Insights for Agent Design
- [Insight 1]
...

### Age-Appropriate Language Level
- Vocabulary complexity: [Description]
- Sentence structure: [Guidelines]
- Explanation style: [Approach]

### Cultural Context
- [Relevant cultural notes for Tunisia/region]

## Appendix
### Key Terms Glossary
- [Term]: [Definition]
...

### Example Lesson Plans
- [Brief summaries of standout lessons]
```

**Deliverable:** Complete outline for EACH English grade level

### Section 1.3: Document Analysis - French Subject

#### Task 1.3.1: Read French Teacher Manuals
- [ ] Follow same process as Task 1.2.1 for French subject
- [ ] Pay special attention to language proficiency levels (A1, A2, B1, etc.)
- [ ] Note differences in pedagogy for French as second language vs. French as primary language

#### Task 1.3.2: Create French Subject Outlines
- [ ] Create comprehensive outlines using same template as Section 1.2.2
- [ ] Document language complexity expectations for each grade
- [ ] Include cultural elements specific to Francophone education

**Deliverable:** Complete outline for EACH French grade level

### Section 1.4: Comparative Analysis

#### Task 1.4.1: Cross-Grade Progression Mapping
- [ ] Create progression charts showing how concepts build across grades
- [ ] Identify prerequisite knowledge for each grade level
- [ ] Map vocabulary progression
- [ ] Map grammar complexity progression

**Example:**
```
Grammar Progression - English:
Grade 1: Simple present tense, basic pronouns
Grade 2: Past tense introduction, possessive pronouns
Grade 3: Future tense, comparative adjectives
...
```

#### Task 1.4.2: Identify Common Patterns
- [ ] Teaching methodologies used consistently
- [ ] Assessment approaches
- [ ] Student difficulty patterns mentioned
- [ ] Recommended intervention strategies

**Deliverable:** `cross-grade-analysis.md` with progression charts and patterns

### Section 1.5: AI Agent Content Database Creation

#### Task 1.5.1: Extract Key Content for Agent Knowledge Base
For each subject and grade:
- [ ] Create structured data files with:
  - Grammar rules and examples
  - Vocabulary lists by theme
  - Reading comprehension question types
  - Writing prompts and templates
  - Common errors and corrections
  - Age-appropriate explanation templates

**Format Example (JSON):**
```json
{
  "subject": "English",
  "grade": 3,
  "grammar": {
    "topics": [
      {
        "name": "Present Continuous Tense",
        "simple_explanation": "Use this to talk about things happening right now!",
        "structure": "am/is/are + verb-ing",
        "examples": [
          "I am reading a book.",
          "She is playing outside."
        ],
        "common_errors": [
          {
            "error": "I am read a book",
            "correction": "I am reading a book",
            "explanation": "Remember to add -ing to the verb!"
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "themes": [
      {
        "name": "Family",
        "words": ["mother", "father", "sister", "brother"],
        "example_sentences": [...],
        "exercises": [...]
      }
    ]
  },
  "reading": {
    "text_types": ["story", "poem", "information text"],
    "strategies": [...]
  },
  "writing": {
    "types": ["personal narrative", "descriptive paragraph"],
    "templates": [...]
  }
}
```

**Deliverable:** Structured knowledge base files for each grade/subject combination

---

## Phase 2: Chat Agent Architecture Design

**Duration:** 2-3 days
**Objective:** Design the technical architecture and conversation flow for both agents

### Section 2.1: Agent Personality & Voice Design

#### Task 2.1.1: Define English Agent Personality
**Agent Name:** English Learning Assistant (or creative name TBD)

**Personality Traits:**
- Encouraging and patient
- Clear and simple communicator
- Enthusiastic about learning
- Culturally sensitive
- Supportive of mistakes as learning opportunities

**Language Characteristics:**
- Uses simple, common English words
- Short sentences for younger grades
- Gradually increases complexity for higher grades
- Avoids idioms and complex metaphors for beginners
- Uses concrete examples

**Example Tone:**
```
Grade 1-2: "Great job! Let's learn about verbs. Verbs are action words.
Can you think of something you like to do? Run? Jump? Play?"

Grade 5-6: "Excellent question! The past perfect tense helps us talk about
something that happened before another past event. Let me show you an example..."
```

#### Task 2.1.2: Define French Agent Personality
**Agent Name:** Assistant d'Apprentissage Français (or creative name TBD)

**Personality Traits:**
- Patient et encourageant (Patient and encouraging)
- Enthusiastic about French language and culture
- Adaptable to student's proficiency level
- Celebrates progress

**Language Characteristics:**
- Utilise un français simple et accessible
- Adapte la complexité selon le niveau
- Évite le jargon technique
- Donne des exemples concrets et quotidiens

**Example Tone:**
```
Niveau 1-2: "Très bien! Aujourd'hui, nous allons apprendre les verbes.
Les verbes sont des mots d'action. Qu'est-ce que tu aimes faire?"

Niveau 5-6: "Excellente question! Le passé composé nous aide à parler
de quelque chose qui s'est passé. Regarde cet exemple..."
```

### Section 2.2: Conversation Flow Design

#### Task 2.2.1: Initial Greeting & Grade Detection
**Flow for both agents:**

1. **Welcome Message**
   - English: "Hello! I'm your English learning assistant. I'm here to help you with grammar, reading, and writing!"
   - French: "Bonjour! Je suis ton assistant d'apprentissage en français. Je suis là pour t'aider avec la grammaire, la lecture et l'écriture!"

2. **Grade Request**
   - English: "What grade are you in? (Please tell me: Grade 1, Grade 2, Grade 3...)"
   - French: "En quelle classe es-tu? (Dis-moi: Classe 1, Classe 2, Classe 3...)"

3. **Grade Confirmation & Capabilities**
   - English: "Perfect! I'll help you with Grade [X] English. I can help you with:
     - Grammar and vocabulary
     - Reading comprehension
     - Writing practice
     What would you like to work on today?"
   - French: "Parfait! Je vais t'aider avec le français de Classe [X]. Je peux t'aider avec:
     - La grammaire et le vocabulaire
     - La compréhension de lecture
     - La pratique de l'écriture
     Sur quoi veux-tu travailler aujourd'hui?"

#### Task 2.2.2: Session Flow Patterns

**Pattern 1: Grammar Help**
```
Student: "I need help with verbs"
Agent:
1. Identify specific grammar topic
2. Retrieve grade-appropriate explanation
3. Provide simple definition
4. Give 2-3 clear examples
5. Offer practice exercise
6. Provide feedback on student attempt
```

**Pattern 2: Reading Comprehension**
```
Student: "I don't understand this story"
Agent:
1. Ask student to share the text (or key parts)
2. Ask what specifically is confusing
3. Break down the text into simpler parts
4. Explain difficult vocabulary in context
5. Ask comprehension questions
6. Guide student to main ideas
```

**Pattern 3: Writing Assistance**
```
Student: "Help me write about [topic]"
Agent:
1. Confirm the type of writing needed
2. Guide through brainstorming
3. Provide age-appropriate structure/template
4. Offer sentence starters
5. Review student's draft (if shared)
6. Give constructive, specific feedback
7. Celebrate good elements
```

#### Task 2.2.3: Edge Case Handling

**Scenario: Student doesn't provide grade**
- Ask again politely: "I need to know your grade so I can help you better! What grade are you in?"
- After 2nd attempt, default to middle grade (Grade 4) with disclaimer

**Scenario: Student asks off-topic question**
- Gently redirect: "That's an interesting question, but I'm here to help you with [English/French]! Do you have any questions about grammar, reading, or writing?"

**Scenario: Student shares frustration or difficulty**
- Empathize: "I understand [this topic] can be tricky! Let's break it down together. Everyone learns at their own pace."

**Scenario: Student makes a mistake**
- Positive correction: "Good try! The correct way to say that is... [correction]. Let's practice together!"

### Section 2.3: Technical Architecture

#### Task 2.3.1: System Design
```
User Interface (HTML/CSS/JS)
         ↓
Grade Detection Module
         ↓
Context Manager (stores grade, session history)
         ↓
AI Agent Core (Groq API + System Prompt)
         ↓
Knowledge Base (Grade-specific content from PDFs)
         ↓
Response Generator
         ↓
Response Formatter (age-appropriate language)
         ↓
User Interface
```

#### Task 2.3.2: File Structure
```
ai.smarthub.com.tn/
├── english-agent/
│   ├── index.html                 # Chat interface
│   ├── chat.php                   # API handler
│   ├── config.php                 # Configuration
│   ├── knowledge-base/
│   │   ├── grade-1.json
│   │   ├── grade-2.json
│   │   ├── grade-3.json
│   │   ├── grade-4.json
│   │   ├── grade-5.json
│   │   └── grade-6.json
│   └── prompts/
│       ├── system-prompt-base.txt
│       └── grade-specific-adjustments.json
│
├── french-agent/
│   ├── index.html
│   ├── chat.php
│   ├── config.php
│   ├── knowledge-base/
│   │   ├── niveau-1.json
│   │   ├── niveau-2.json
│   │   ├── niveau-3.json
│   │   ├── niveau-4.json
│   │   ├── niveau-5.json
│   │   └── niveau-6.json
│   └── prompts/
│       ├── system-prompt-base.txt
│       └── grade-specific-adjustments.json
│
└── assets/
    ├── css/
    │   └── student-chat.css       # Student-friendly styling
    └── js/
        └── student-chat.js        # Enhanced chat for students
```

#### Task 2.3.3: Data Flow Design
1. **Student sends message** → Frontend captures input
2. **Check if grade is known** → Session storage or ask user
3. **Retrieve grade-specific context** → Load appropriate JSON knowledge base
4. **Construct enhanced prompt** → System prompt + grade context + student message
5. **Call Groq API** → Send complete prompt
6. **Receive AI response** → Parse and format
7. **Validate appropriateness** → Check language complexity
8. **Display to student** → Render in chat interface
9. **Update session context** → Remember conversation flow

---

## Phase 3: English Language Agent Development

**Duration:** 4-5 days
**Objective:** Build fully functional English learning assistant agent

### Section 3.1: System Prompt Development

#### Task 3.1.1: Create Base System Prompt for English Agent

```
You are an English Learning Assistant for students at SmartHub educational
facility in Tunisia. Your role is to help students improve their English
language skills in three main areas: grammar & vocabulary, reading
comprehension, and guided writing.

STUDENT INFORMATION:
- Student Grade Level: [GRADE_LEVEL] (This will be dynamically inserted)
- Educational Context: Tunisian students learning English as a foreign language
- Learning Style: Patient, step-by-step guidance needed

YOUR RESPONSIBILITIES:

1. GRAMMAR & VOCABULARY HELP
   - Explain grammar concepts using simple, clear language
   - Provide concrete examples relevant to student's life
   - Offer practice exercises appropriate for grade level
   - Give positive, constructive feedback on student attempts
   - Focus on one concept at a time to avoid overwhelming

2. READING COMPREHENSION ASSISTANCE
   - Help students understand difficult texts
   - Break down complex sentences into simpler parts
   - Explain vocabulary in context
   - Ask guiding questions to check understanding
   - Teach reading strategies (predict, visualize, question, summarize)

3. GUIDED WRITING SUPPORT
   - Help brainstorm ideas for writing assignments
   - Provide age-appropriate writing templates and structures
   - Offer sentence starters and transitions
   - Give specific, kind feedback on student writing
   - Encourage revision and improvement

COMMUNICATION GUIDELINES:

Language Complexity by Grade:
- Grades 1-2: Very simple words (200-300 word vocabulary), short sentences
  (5-8 words), present tense focus
- Grades 3-4: Common everyday words (500-700 word vocabulary), medium sentences
  (8-12 words), introduce past tense
- Grades 5-6: Expanded vocabulary (1000+ words), longer sentences (12-15 words),
  various tenses

Tone & Style:
- Encouraging and patient ("Great job!", "Let's try together!", "You're doing well!")
- Clear and direct - avoid idioms and complex metaphors
- Break explanations into small steps
- Use concrete examples from daily life (school, family, hobbies)
- Celebrate mistakes as learning opportunities

Cultural Sensitivity:
- Be aware student may primarily speak French or Arabic
- Use examples relevant to Tunisian context when possible
- Be patient with translation challenges
- Avoid culturally specific Western references that may confuse

INTERACTION PATTERN:

1. First Interaction:
   - Greet warmly in simple English
   - Ask for student's grade level if not known
   - Explain what you can help with
   - Ask what they'd like to work on

2. During Conversation:
   - Listen carefully to student's needs
   - Ask clarifying questions
   - Provide explanations suited to their grade level
   - Give examples before asking student to try
   - Offer encouragement frequently
   - Check for understanding ("Does that make sense?")

3. When Student Makes Errors:
   - Never shame or criticize
   - Point out what they did well first
   - Gently correct with explanation
   - Give them chance to try again
   - Praise improvement

KNOWLEDGE BASE:
You have access to curriculum information for grades 1-6, including:
- Grammar topics taught at each level
- Vocabulary themes by grade
- Reading text types and strategies
- Writing formats and rubrics

[GRADE_SPECIFIC_CONTENT will be injected here based on detected grade]

LIMITATIONS:
- Cannot complete homework for students (but can guide them)
- Cannot give tests or formal assessments
- Cannot access external websites or materials
- Focus only on English language learning (redirect other subjects)
- Cannot provide personal counseling (redirect to teachers/parents)

RESPONSE FORMAT:
- Keep responses concise (3-5 sentences for young grades, longer OK for older)
- Use formatting for clarity (bullet points, numbered steps)
- Include examples whenever explaining concepts
- End with an engaging question or next step

Your goal is to make English learning enjoyable, accessible, and effective
for every student, regardless of their current level. Build their confidence
while improving their skills.
```

#### Task 3.1.2: Create Grade-Specific Prompt Enhancements

Create JSON file with grade-specific adjustments:

```json
{
  "grade_1": {
    "vocabulary_limit": 300,
    "sentence_length_max": 8,
    "grammar_topics": ["simple present", "basic pronouns", "singular/plural"],
    "instruction_style": "very simple, repetitive, lots of encouragement",
    "example_complexity": "one-step examples only"
  },
  "grade_2": {
    "vocabulary_limit": 400,
    "sentence_length_max": 10,
    "grammar_topics": ["present continuous", "past simple (intro)", "possessives"],
    "instruction_style": "simple, clear steps, frequent praise",
    "example_complexity": "two-step examples acceptable"
  },
  "grade_3": {
    "vocabulary_limit": 600,
    "sentence_length_max": 12,
    "grammar_topics": ["past simple", "future simple", "comparatives"],
    "instruction_style": "clear explanations, encourage questions",
    "example_complexity": "multi-step examples OK with guidance"
  },
  "grade_4": {
    "vocabulary_limit": 800,
    "sentence_length_max": 13,
    "grammar_topics": ["present perfect (intro)", "modal verbs", "adverbs"],
    "instruction_style": "detailed but accessible, promote independence",
    "example_complexity": "complex examples with scaffolding"
  },
  "grade_5": {
    "vocabulary_limit": 1000,
    "sentence_length_max": 15,
    "grammar_topics": ["present perfect", "conditionals (type 1)", "passive voice (intro)"],
    "instruction_style": "comprehensive explanations, critical thinking",
    "example_complexity": "sophisticated examples, multiple steps"
  },
  "grade_6": {
    "vocabulary_limit": 1200,
    "sentence_length_max": 18,
    "grammar_topics": ["all tenses review", "conditionals (types 1-2)", "passive voice", "reported speech"],
    "instruction_style": "nuanced explanations, prepare for advanced study",
    "example_complexity": "complex examples, abstract concepts OK"
  }
}
```

### Section 3.2: Frontend Development

#### Task 3.2.1: Create Student-Friendly HTML Interface
- [ ] Bright, engaging color scheme (not corporate)
- [ ] Large, easy-to-click buttons
- [ ] Clear grade selection interface
- [ ] Friendly avatar or icon for agent
- [ ] Example questions to get started
- [ ] Encouragement messages during loading

#### Task 3.2.2: Develop Enhanced JavaScript
Features to add beyond basic chat:
- [ ] Grade detection and persistent storage
- [ ] "Example questions" buttons for each skill area
- [ ] Typing indicator with encouraging messages
- [ ] Progress celebration (confetti on good responses?)
- [ ] Save conversation feature
- [ ] "Start over" button to reset conversation

#### Task 3.2.3: Design Student-Appropriate CSS
- [ ] Large, readable fonts (minimum 16px for body)
- [ ] High contrast for readability
- [ ] Friendly colors (blues, greens, light purples)
- [ ] Fun animations (subtle, not distracting)
- [ ] Mobile-first design (many students use phones)
- [ ] Emoji support for encouragement

### Section 3.3: Backend Development

#### Task 3.3.1: Build PHP Grade Detection Handler
```php
<?php
// Detect grade from student message
function detectGrade($message) {
    $patterns = [
        '/grade\s*([1-6])/i',
        '/class\s*([1-6])/i',
        '/level\s*([1-6])/i',
        '/year\s*([1-6])/i',
        '/([1-6])(st|nd|rd|th)\s*grade/i'
    ];

    foreach ($patterns as $pattern) {
        if (preg_match($pattern, $message, $matches)) {
            return intval($matches[1]);
        }
    }

    return null;
}
?>
```

#### Task 3.3.2: Build Knowledge Base Loader
```php
<?php
function loadGradeKnowledge($grade) {
    $filepath = __DIR__ . "/knowledge-base/grade-{$grade}.json";

    if (!file_exists($filepath)) {
        return null;
    }

    $content = file_get_contents($filepath);
    return json_decode($content, true);
}

function enhancePromptWithKnowledge($basePrompt, $grade) {
    $knowledge = loadGradeKnowledge($grade);

    if (!$knowledge) {
        return $basePrompt;
    }

    $gradeContext = "\n\nGRADE {$grade} SPECIFIC KNOWLEDGE:\n\n";
    $gradeContext .= "Grammar Topics: " . implode(", ", $knowledge['grammar']['topics']) . "\n";
    $gradeContext .= "Vocabulary Themes: " . implode(", ", array_column($knowledge['vocabulary']['themes'], 'name')) . "\n";
    $gradeContext .= "Writing Types: " . implode(", ", $knowledge['writing']['types']) . "\n";

    return $basePrompt . $gradeContext;
}
?>
```

#### Task 3.3.3: Build Main Chat Handler
- [ ] Integrate grade detection
- [ ] Load appropriate knowledge base
- [ ] Construct complete prompt with grade context
- [ ] Call Groq API with enhanced prompt
- [ ] Format response for student readability
- [ ] Error handling with student-friendly messages

### Section 3.4: Knowledge Base Population

#### Task 3.4.1: Create Knowledge Base Files
- [ ] Transform outlines from Phase 1 into JSON format
- [ ] Create grade-1.json through grade-6.json
- [ ] Include all key content from teacher manuals
- [ ] Add example exercises and questions
- [ ] Ensure age-appropriate language in all entries

#### Task 3.4.2: Quality Check Knowledge Base
- [ ] Verify all grammar topics are covered
- [ ] Check vocabulary lists are complete
- [ ] Ensure examples are clear and relevant
- [ ] Validate JSON syntax
- [ ] Test loading in PHP handler

---

## Phase 4: French Language Agent Development

**Duration:** 4-5 days
**Objective:** Build fully functional French learning assistant agent

### Section 4.1: System Prompt Development (French)

#### Task 4.1.1: Create Base System Prompt for French Agent

```
Tu es un Assistant d'Apprentissage en Français pour les élèves de
SmartHub en Tunisie. Ton rôle est d'aider les élèves à améliorer
leurs compétences en langue française dans trois domaines principaux:
la grammaire et le vocabulaire, la compréhension de lecture, et l'écriture guidée.

INFORMATIONS SUR L'ÉLÈVE:
- Niveau de classe: [NIVEAU_CLASSE] (sera inséré dynamiquement)
- Contexte éducatif: Élèves tunisiens apprenant le français
- Style d'apprentissage: Guidance patiente et progressive nécessaire

TES RESPONSABILITÉS:

1. AIDE EN GRAMMAIRE ET VOCABULAIRE
   - Expliquer les concepts grammaticaux avec un langage simple et clair
   - Fournir des exemples concrets pertinents à la vie de l'élève
   - Offrir des exercices pratiques adaptés au niveau de classe
   - Donner des retours positifs et constructifs sur les tentatives de l'élève
   - Se concentrer sur un concept à la fois pour ne pas surcharger

2. ASSISTANCE EN COMPRÉHENSION DE LECTURE
   - Aider les élèves à comprendre les textes difficiles
   - Décomposer les phrases complexes en parties plus simples
   - Expliquer le vocabulaire dans son contexte
   - Poser des questions guidantes pour vérifier la compréhension
   - Enseigner les stratégies de lecture (prédire, visualiser, questionner, résumer)

3. SOUTIEN EN ÉCRITURE GUIDÉE
   - Aider à réfléchir aux idées pour les devoirs d'écriture
   - Fournir des modèles et structures d'écriture adaptés à l'âge
   - Offrir des débuts de phrases et des transitions
   - Donner des retours spécifiques et bienveillants sur l'écriture de l'élève
   - Encourager la révision et l'amélioration

DIRECTIVES DE COMMUNICATION:

Complexité du Langage par Niveau:
- Classes 1-2: Mots très simples (vocabulaire de 200-300 mots), phrases courtes
  (5-8 mots), focus sur le présent
- Classes 3-4: Mots courants quotidiens (vocabulaire de 500-700 mots), phrases moyennes
  (8-12 mots), introduction du passé
- Classes 5-6: Vocabulaire élargi (1000+ mots), phrases plus longues (12-15 mots),
  temps variés

Ton et Style:
- Encourageant et patient ("Très bien!", "Essayons ensemble!", "Tu progresses!")
- Clair et direct - éviter les expressions idiomatiques complexes
- Décomposer les explications en petites étapes
- Utiliser des exemples concrets de la vie quotidienne (école, famille, loisirs)
- Célébrer les erreurs comme des opportunités d'apprentissage

Sensibilité Culturelle:
- Être conscient que l'élève peut aussi parler arabe
- Utiliser des exemples pertinents au contexte tunisien quand possible
- Être patient avec les défis de traduction
- Intégrer des références culturelles francophones appropriées

SCHÉMA D'INTERACTION:

1. Première Interaction:
   - Saluer chaleureusement en français simple
   - Demander le niveau de classe de l'élève si non connu
   - Expliquer ce que tu peux aider
   - Demander sur quoi ils aimeraient travailler

2. Pendant la Conversation:
   - Écouter attentivement les besoins de l'élève
   - Poser des questions de clarification
   - Fournir des explications adaptées à leur niveau de classe
   - Donner des exemples avant de demander à l'élève d'essayer
   - Offrir des encouragements fréquemment
   - Vérifier la compréhension ("C'est clair?", "Tu comprends?")

3. Quand l'Élève Fait des Erreurs:
   - Ne jamais critiquer ou faire honte
   - Souligner d'abord ce qu'ils ont bien fait
   - Corriger doucement avec explication
   - Leur donner une chance de réessayer
   - Féliciter l'amélioration

BASE DE CONNAISSANCES:
Tu as accès aux informations du curriculum pour les classes 1-6, incluant:
- Sujets de grammaire enseignés à chaque niveau
- Thèmes de vocabulaire par classe
- Types de textes de lecture et stratégies
- Formats d'écriture et critères d'évaluation

[CONTENU_SPECIFIQUE_AU_NIVEAU sera inséré ici selon le niveau détecté]

LIMITES:
- Ne peux pas compléter les devoirs pour les élèves (mais peux les guider)
- Ne peux pas donner de tests ou évaluations formelles
- Ne peux pas accéder à des sites web ou matériaux externes
- Focus uniquement sur l'apprentissage du français (rediriger autres matières)
- Ne peux pas fournir de conseil personnel (rediriger vers enseignants/parents)

FORMAT DE RÉPONSE:
- Garder les réponses concises (3-5 phrases pour jeunes classes, plus long OK pour plus âgés)
- Utiliser le formatage pour la clarté (puces, étapes numérotées)
- Inclure des exemples lors de l'explication de concepts
- Terminer avec une question engageante ou prochaine étape

Ton objectif est de rendre l'apprentissage du français agréable, accessible
et efficace pour chaque élève, quel que soit son niveau actuel. Construis
leur confiance tout en améliorant leurs compétences.
```

#### Task 4.1.2: Create Grade-Specific Prompt Enhancements (French)
- [ ] Similar structure to English version
- [ ] Adjust for French grammar complexity
- [ ] Include CEFR levels if applicable (A1, A2, B1)
- [ ] Account for Tunisian French language context

### Section 4.2: Frontend Development (French)

#### Task 4.2.1: Adapt Interface for French
- [ ] All UI text in French
- [ ] "Classe" instead of "Grade"
- [ ] French example questions
- [ ] Culturally appropriate colors/imagery
- [ ] Support for French accents and special characters

#### Task 4.2.2: French-Specific JavaScript
- [ ] Grade detection in French ("Classe 1", "Niveau 2", etc.)
- [ ] French language validation
- [ ] Proper accent handling in input

### Section 4.3: Backend Development (French)

#### Task 4.3.1: Build French Grade Detection
- [ ] Patterns for French grade expressions
- [ ] Handle "classe", "niveau", "année" variations
- [ ] Written numbers in French ("trois", "quatre")

#### Task 4.3.2: French Knowledge Base Loader
- [ ] Load niveau-1.json through niveau-6.json
- [ ] Handle French-specific grammar terminology
- [ ] Format French examples properly

#### Task 4.3.3: French Chat Handler
- [ ] Same structure as English handler
- [ ] Load French system prompt
- [ ] Use French knowledge bases
- [ ] Error messages in French

### Section 4.4: Knowledge Base Population (French)

#### Task 4.4.1: Create French Knowledge Base Files
- [ ] Transform French outlines into JSON
- [ ] Create niveau-1.json through niveau-6.json
- [ ] Ensure all content is in proper French
- [ ] Include French grammar rules and exceptions

#### Task 4.4.2: Quality Check French Content
- [ ] Verify grammar explanations are accurate
- [ ] Check accent marks are correct
- [ ] Validate cultural appropriateness
- [ ] Test with native French speakers if possible

---

## Phase 5: Testing & Refinement

**Duration:** 4-5 days
**Objective:** Thoroughly test both agents and refine based on feedback

### Section 5.1: Functional Testing - English Agent

#### Task 5.1.1: Grade Detection Testing
- [ ] Test with various grade expressions
- [ ] "I'm in grade 3", "grade 5", "I am a 2nd grader"
- [ ] Test persistence across conversation
- [ ] Test when grade is not provided

#### Task 5.1.2: Grammar Help Testing
For each grade level (1-6):
- [ ] Ask for help with grade-appropriate grammar topic
- [ ] Verify explanation matches grade complexity
- [ ] Check examples are clear and relevant
- [ ] Test correction of student errors
- [ ] Verify tone is encouraging

**Example Test Cases:**
- Grade 1: "what is a verb?"
- Grade 3: "I don't understand past tense"
- Grade 5: "explain present perfect please"

#### Task 5.1.3: Reading Comprehension Testing
- [ ] Share simple passage, ask for help understanding
- [ ] Test vocabulary explanation
- [ ] Check if agent breaks down complex sentences
- [ ] Verify comprehension questions are appropriate

#### Task 5.1.4: Writing Assistance Testing
- [ ] Ask for help writing a story (Grade 2)
- [ ] Request help with descriptive paragraph (Grade 4)
- [ ] Ask for essay writing guidance (Grade 6)
- [ ] Test feedback quality on sample student writing

#### Task 5.1.5: Edge Cases - English
- [ ] Student uses very poor English
- [ ] Student asks off-topic questions
- [ ] Student tries to get agent to do homework
- [ ] Student expresses frustration
- [ ] Very long or very short messages

### Section 5.2: Functional Testing - French Agent

#### Task 5.2.1: Detection de Niveau Testing
- [ ] Test avec diverses expressions de niveau
- [ ] "Je suis en classe 3", "niveau 5", "je suis en deuxième"
- [ ] Test persistance à travers la conversation

#### Task 5.2.2: Aide en Grammaire Testing
Pour chaque niveau (1-6):
- [ ] Demander aide sur sujet grammatical approprié
- [ ] Vérifier explication correspond à complexité du niveau
- [ ] Vérifier exemples sont clairs et pertinents
- [ ] Tester correction d'erreurs
- [ ] Vérifier ton est encourageant

**Exemples de Cas de Test:**
- Classe 1: "c'est quoi un verbe?"
- Classe 3: "je comprends pas le passé composé"
- Classe 5: "explique moi le subjonctif stp"

#### Task 5.2.3: Compréhension de Lecture Testing
- [ ] Partager passage simple, demander aide
- [ ] Tester explication de vocabulaire
- [ ] Vérifier décomposition de phrases complexes

#### Task 5.2.4: Assistance en Écriture Testing
- [ ] Demander aide pour écrire une histoire (Classe 2)
- [ ] Demander aide pour paragraphe descriptif (Classe 4)
- [ ] Demander aide pour rédaction (Classe 6)

#### Task 5.2.5: Cas Limites - Français
- [ ] Élève utilise français très approximatif
- [ ] Élève pose questions hors-sujet
- [ ] Élève essaie de faire faire devoirs par agent
- [ ] Messages très longs ou très courts

### Section 5.3: Cross-Agent Validation

#### Task 5.3.1: Language Consistency Check
- [ ] Verify English agent responds ONLY in English
- [ ] Verify French agent responds ONLY in French
- [ ] Test what happens if student switches languages mid-conversation

#### Task 5.3.2: Age-Appropriateness Validation
For each grade level:
- [ ] Check vocabulary complexity matches grade
- [ ] Verify sentence length is appropriate
- [ ] Ensure examples are age-relevant
- [ ] Confirm explanations aren't too simple or too complex

### Section 5.4: User Acceptance Testing

#### Task 5.4.1: Student Testing
- [ ] Recruit 2-3 students per grade level
- [ ] Have them use both agents (if bilingual)
- [ ] Collect feedback:
  - Was the agent helpful?
  - Did you understand the explanations?
  - Was the language too easy, too hard, or just right?
  - Would you use this again?

#### Task 5.4.2: Teacher Review
- [ ] Have SmartHub teachers test both agents
- [ ] Verify curriculum alignment
- [ ] Check accuracy of grammar explanations
- [ ] Evaluate pedagogical approach
- [ ] Collect suggestions for improvement

### Section 5.5: Performance Testing

#### Task 5.5.1: Response Time Testing
- [ ] Measure average response time per grade level
- [ ] Test with different message lengths
- [ ] Monitor Groq API latency
- [ ] Target: <5 seconds for most responses

#### Task 5.5.2: Load Testing
- [ ] Test multiple simultaneous users
- [ ] Verify no degradation in response quality
- [ ] Check API quota usage
- [ ] Ensure error handling works under load

### Section 5.6: Refinement Based on Testing

#### Task 5.6.1: Prompt Optimization
- [ ] Adjust system prompts based on test results
- [ ] Refine grade-specific instructions
- [ ] Improve error handling instructions
- [ ] Enhance tone guidance

#### Task 5.6.2: Knowledge Base Updates
- [ ] Add missing grammar topics
- [ ] Expand vocabulary lists
- [ ] Include more examples
- [ ] Correct any inaccuracies

#### Task 5.6.3: UI/UX Improvements
- [ ] Adjust based on student feedback
- [ ] Improve mobile responsiveness
- [ ] Enhance visual appeal
- [ ] Add helpful hints or tips

---

## Phase 6: Deployment & Integration

**Duration:** 2-3 days
**Objective:** Deploy agents to production and integrate with SmartHub website

### Section 6.1: Pre-Deployment Preparation

#### Task 6.1.1: Final Code Review
- [ ] Review all PHP code for security
- [ ] Validate all JSON files
- [ ] Check for hardcoded values
- [ ] Ensure config files are properly secured
- [ ] Remove all testing/debug code

#### Task 6.1.2: Documentation Completion
- [ ] Create admin guide for maintaining agents
- [ ] Document how to update knowledge bases
- [ ] Write troubleshooting guide
- [ ] Create user guide for students (optional)

#### Task 6.1.3: Backup Current System
- [ ] Backup existing ai.smarthub.com.tn content
- [ ] Document current file structure
- [ ] Create rollback plan

### Section 6.2: Deployment to Production

#### Task 6.2.1: Upload English Agent
- [ ] Upload all english-agent/ files via FTP
- [ ] Set correct file permissions
- [ ] Verify config.php has correct API key
- [ ] Test access: https://ai.smarthub.com.tn/english-agent/

#### Task 6.2.2: Upload French Agent
- [ ] Upload all french-agent/ files via FTP
- [ ] Set correct file permissions
- [ ] Verify config.php has correct API key
- [ ] Test access: https://ai.smarthub.com.tn/french-agent/

#### Task 6.2.3: Update Landing Page
- [ ] Add links to new educational agents
- [ ] Update description of available services
- [ ] Ensure clear navigation for students

### Section 6.3: Integration with Main Website

#### Task 6.3.1: Add Student Resources Section
- [ ] Create "Student Learning Resources" page on smarthub.com.tn
- [ ] Link to English Learning Assistant
- [ ] Link to French Learning Assistant
- [ ] Add brief description of what each agent can help with

#### Task 6.3.2: Add Navigation Links
- [ ] Add to main menu: "Learning Assistants" or "AI Tutors"
- [ ] Create student-friendly call-to-action
- [ ] Add badges indicating "Free AI Help Available"

### Section 6.4: Post-Deployment Verification

#### Task 6.4.1: Production Testing
- [ ] Test English agent on production
- [ ] Test French agent on production
- [ ] Test from multiple devices (desktop, mobile, tablet)
- [ ] Test from external network
- [ ] Verify SSL is working
- [ ] Check all knowledge base files load correctly

#### Task 6.4.2: Monitor Initial Usage
- [ ] Check Groq API usage first 24 hours
- [ ] Monitor for any error logs
- [ ] Collect initial user feedback
- [ ] Watch for any unexpected behavior

---

## Appendices

### Appendix A: Estimated Timeline Summary

**Phase 1: Document Analysis (3-5 days)**
- Day 1: PDF discovery and cataloging
- Days 2-3: English manual analysis and outlines
- Days 3-4: French manual analysis and outlines
- Day 5: Comparative analysis and knowledge base creation

**Phase 2: Architecture Design (2-3 days)**
- Day 1: Agent personality and conversation flow design
- Day 2: Technical architecture and file structure
- Day 3: Documentation and review

**Phase 3: English Agent Development (4-5 days)**
- Days 1-2: System prompt and knowledge base setup
- Days 3-4: Frontend and backend development
- Day 5: Integration and initial testing

**Phase 4: French Agent Development (4-5 days)**
- Days 1-2: French system prompt and knowledge base
- Days 3-4: French frontend and backend
- Day 5: Integration and initial testing

**Phase 5: Testing & Refinement (4-5 days)**
- Days 1-2: Functional testing both agents
- Day 3: User acceptance testing
- Days 4-5: Refinements and optimizations

**Phase 6: Deployment (2-3 days)**
- Day 1: Final preparations and deployment
- Days 2-3: Post-deployment testing and monitoring

**Total Estimated Duration: 19-26 days (approximately 3-4 weeks)**

### Appendix B: Required Teacher Input

Before starting development, please provide:

**PDF Documents:**
- [ ] All English teacher manuals (grades 1-6)
- [ ] All French teacher manuals (grades 1-6)
- [ ] Any supplementary curriculum guides
- [ ] Assessment rubrics if available

**Educational Context:**
- [ ] Which grades SmartHub primarily serves
- [ ] Current English/French proficiency levels of students
- [ ] Common challenges students face in each subject
- [ ] Preferred teaching methodologies at SmartHub

**Technical Information:**
- [ ] Preferred subdomain names (suggestions: learn.smarthub.com.tn or tutors.smarthub.com.tn)
- [ ] Groq API key (separate from teacher/parent chat if needed)
- [ ] Any specific branding for student-facing tools

**Content Preferences:**
- [ ] Should agents use "tu" or "vous" in French?
- [ ] Any topics to avoid or emphasize?
- [ ] Cultural considerations for Tunisian students
- [ ] Preferred tone (formal vs casual)

### Appendix C: Success Metrics

**Quantitative Metrics:**
- Number of student sessions per week
- Average conversation length
- Grade distribution of users
- Most requested topics (grammar, reading, writing)
- API usage and costs
- Response time averages

**Qualitative Metrics:**
- Student satisfaction ratings
- Teacher feedback on accuracy
- Observed improvement in student confidence
- Quality of agent responses (manual review sample)
- Appropriateness of language complexity

**Educational Impact:**
- Students report feeling more confident in subject
- Teachers notice improved homework quality
- Students use agents for independent study
- Reduction in repetitive questions to teachers
- Students recommend agents to peers

### Appendix D: Maintenance Plan

**Weekly Tasks:**
- Monitor Groq API usage
- Check error logs
- Review any user feedback received

**Monthly Tasks:**
- Sample 10-20 conversations for quality review
- Update knowledge bases with new content if needed
- Review most common questions/topics
- Assess if any grade levels need adjustment

**Quarterly Tasks:**
- Comprehensive review of both agents
- Update system prompts based on cumulative feedback
- Assess alignment with current curriculum
- Consider enhancements or new features
- Review success metrics and adjust strategy

**Annual Tasks:**
- Complete refresh of knowledge bases
- Update for new academic year curriculum
- Major prompt optimization
- Technology stack review and updates

### Appendix E: Future Enhancement Ideas

**Enhancement 1: Speech Recognition**
- Allow students to speak questions instead of typing
- Especially helpful for younger grades
- **Effort:** Medium | **Value:** High

**Enhancement 2: Homework Helper Mode**
- Dedicated mode for homework assistance
- Tracks homework progress across sessions
- **Effort:** Medium | **Value:** Very High

**Enhancement 3: Progress Tracking**
- Student accounts (optional)
- Track topics covered and mastery level
- Generate progress reports
- **Effort:** High | **Value:** Very High
- **Requires:** Database implementation

**Enhancement 4: Gamification**
- Points/badges for using the agent
- Challenges and quizzes
- Leaderboards (optional)
- **Effort:** Medium | **Value:** Medium

**Enhancement 5: Parent Dashboard**
- Parents can see what their child is learning
- Suggestions for at-home practice
- **Effort:** High | **Value:** Medium
- **Requires:** Account system

**Enhancement 6: Multi-Agent Subjects**
- Add Math assistant
- Add Science assistant
- Add Arabic assistant
- **Effort:** Medium each | **Value:** Very High

**Enhancement 7: Visual Learning**
- Agent can display images/diagrams
- Help with visual vocabulary
- Diagram sentence structure
- **Effort:** Medium | **Value:** High

**Enhancement 8: Writing Portfolio**
- Students can save their writing pieces
- Track improvement over time
- Share with teachers
- **Effort:** High | **Value:** High
- **Requires:** Database and authentication

### Appendix F: Risk Management

**Risk 1: PDFs Not Available or Incomplete**
- **Mitigation:** Use standard curriculum frameworks, supplement with online resources
- **Impact:** Moderate - can still build functional agents with general curriculum knowledge

**Risk 2: Agent Responses Not Age-Appropriate**
- **Mitigation:** Extensive testing with real students, iterative prompt refinement
- **Impact:** High - must be addressed before launch

**Risk 3: Students Try to Misuse (Cheat)**
- **Mitigation:** Design agent to guide rather than give answers, clear messaging about purpose
- **Impact:** Low - educational design prevents direct answer-giving

**Risk 4: High API Costs**
- **Mitigation:** Monitor usage closely, implement rate limiting if needed, optimize prompts
- **Impact:** Medium - may need to upgrade from free tier

**Risk 5: Language Quality Issues (French)**
- **Mitigation:** Have native French speakers review, test thoroughly
- **Impact:** Medium - can be fixed with prompt adjustments

**Risk 6: Students Struggle with Text-Based Interface**
- **Mitigation:** Very clear instructions, example questions, consider voice input for future
- **Impact:** Medium - affects younger grades more

**Risk 7: Low Student Adoption**
- **Mitigation:** Teacher promotion, integration into homework, make it fun and engaging
- **Impact:** Low - no cost if not used, but wastes development effort

### Appendix G: Accessibility Considerations

**Visual Accessibility:**
- [ ] High contrast colors (WCAG AA minimum)
- [ ] Large, readable fonts (minimum 16px)
- [ ] Clear visual hierarchy
- [ ] Support for browser zoom up to 200%

**Motor Accessibility:**
- [ ] Large click targets (minimum 44x44px)
- [ ] Keyboard navigation support
- [ ] Voice input consideration (future)

**Cognitive Accessibility:**
- [ ] Simple, clear language
- [ ] Consistent layout and navigation
- [ ] Visual feedback for all actions
- [ ] Error messages are helpful, not technical

**Language Accessibility:**
- [ ] Support for students with varying proficiency levels
- [ ] Patient with spelling errors
- [ ] Multiple ways to ask same question

### Appendix H: Technical Specifications

**Frontend Technologies:**
- HTML5 with semantic markup
- CSS3 (Flexbox, Grid, animations)
- Vanilla JavaScript (ES6+)
- Fetch API for AJAX calls

**Backend Technologies:**
- PHP 7.4+
- JSON for knowledge bases
- File-based session management (optional)

**AI Model:**
- Groq API
- Llama 3.1 70B Versatile (or latest available)
- Temperature: 0.7 (balanced creativity)
- Max tokens: 512-1024 (adjust based on grade)

**Browser Support:**
- Chrome 90+ (desktop & mobile)
- Firefox 88+
- Safari 14+ (desktop & iOS)
- Edge 90+
- Opera 75+

**Mobile Support:**
- iOS 12+
- Android 8+
- Responsive design: 320px - 2560px width

**Hosting:**
- OVH Shared Hosting (same as main site)
- HTTPS/SSL required
- PHP support confirmed
- Sufficient storage for knowledge bases (~50MB)

**API Requirements:**
- Groq API key with sufficient quota
- Estimated usage: 100-500 requests/day initially
- Response time target: <5 seconds

---

## Next Steps

**Immediate Actions:**

1. **Confirm Plan Approval**
   - [ ] Review complete plan
   - [ ] Confirm timeline is acceptable (3-4 weeks)
   - [ ] Approve approach and architecture

2. **Provide PDF Documents**
   - [ ] Upload or share English teacher manuals (grades 1-6)
   - [ ] Upload or share French teacher manuals (grades 1-6)
   - [ ] Provide any additional curriculum materials

3. **Answer Key Questions**
   - [ ] Which grades are priority? (if not all)
   - [ ] Should French agent use "tu" or "vous"?
   - [ ] Any specific SmartHub teaching methodologies to emphasize?
   - [ ] Preferred agent names (or use default)?

4. **Technical Preparation**
   - [ ] Confirm Groq API key availability
   - [ ] Decide on subdomain (keep ai.smarthub.com.tn or create new?)
   - [ ] Approve testing plan and timeline

**Once Confirmed, Development Begins with Phase 1!**

---

**Document Version:** 1.0
**Created:** November 6, 2025
**Status:** Awaiting Approval
**Next Review:** Upon teacher confirmation

---

*This plan will evolve as we progress through each phase. Updates will be documented and shared regularly.*

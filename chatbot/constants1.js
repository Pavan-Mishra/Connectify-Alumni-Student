// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["coding", "web development ", "python"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what do you call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["Coding is the process of writing instructions in a programming language that a computer can understand and execute.", "Web development refers to the process of creating and maintaining websites or web applications.", "data science"],
    ["help me", "tell me story", "tell me a joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "funny", "joke"],
    ["machine learning", "ml", "artificial intelligence", "ai"],
    ["python", "java", "javascript", "c++"],
    ["data analysis", "data visualization", "data mining"],
    ["web development", "front-end development", "back-end development"],
    ["sql", "mysql", "mongodb", "database"],
    ["algorithms", "data structures", "computer science"],
    ["neural networks", "deep learning", "natural language processing"],
    ["github", "git", "version control"],
    ["agile development", "scrum", "waterfall"],
    ["cloud computing", "aws", "azure", "google cloud"],
    ["cybersecurity", "security", "penetration testing"]
  ];
  
  // Possible responses, in corresponding order
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["I can help with coding and web development questions.", "What programming language are you using?", "I can assist with data science and machine learning queries."],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Coding is the process of writing instructions in a programming language that a computer can understand and execute.", "Web development refers to the process of creating and maintaining websites or web applications.", "Data science is a field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Good one!"],
    ["Machine learning is a subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions.", "Artificial intelligence refers to the broader field of research and development aimed at creating machines that can perform tasks that typically require human intelligence."],
    ["Python is a popular programming language used for web development, data analysis, and machine learning.", "Java is an object-oriented programming language used for Android app development, web development, and enterprise software development.", "JavaScript is a scripting language used for client-side web development, game development, and mobile app development."],
    ["Data analysis involves using statistical and computational methods to extract insights from data.", "Data visualization is the graphical representation of data, making complex data more accessible and understandable.", "Data mining is the process of discovering patterns and knowledge from large amounts of data."],
    ["Web development refers to the process of creating and maintaining websites or web applications.", "Front-end development focuses on the visual and interactive aspects of a website.", "Back-end development involves server-side logic, databases, and application functionality."],
    ["SQL is a language used to manage and manipulate databases.", "MySQL is an open-source relational database management system.", "MongoDB is a NoSQL database that uses JSON-like documents to store data."],
    ["Algorithms are step-by-step procedures for solving problems.", "Data structures organize and store data efficiently.", "Computer science is the study of computation, programming, and information technology."],
    ["Neural networks are computing systems inspired by the human brain.", "Deep learning is a subset of machine learning that uses neural networks with many layers.", "Natural language processing is a field of AI focused on the interaction between computers and humans through natural language."],
    ["Git is a version control system for tracking changes in source code.", "GitHub is a platform for hosting and collaborating on Git repositories.", "Version control is the management of changes to documents, programs, and other information."],
    ["Agile development is a methodology focused on iterative development and customer feedback.", "Scrum is a framework for managing and completing complex projects.", "Waterfall is a linear and sequential approach to software development."],
    ["Cloud computing provides on-demand access to computing resources over the internet.", "AWS (Amazon Web Services) is a cloud platform offering a range of services.", "Azure is Microsoft's cloud computing platform."],
    ["Cybersecurity involves protecting computer systems and networks from theft, damage, and unauthorized access.", "Security practices include encryption, authentication, and firewalls.", "Penetration testing is the practice of testing a computer system, network, or web application to find vulnerabilities."]
  ];
  
  // Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
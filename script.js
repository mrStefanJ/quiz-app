const quizData = {
  html: {
    junior: [
      {
        question: "<p>What does HTML stand for</p>",
        code: "",
        options: [
          "Home Tool Markup Language",
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "<p>Choose the correct HTML element for the largest heading:</p>",
        code: "",
        options: ["<heading>", "<h1>", "<head>", "<h6>"],
        answer: "<h1>",
      },
      {
        question:
          "<p>What is the correct HTML for adding a background color?</p>",
        code: "",
        options: [
          '<body style="background-color:yellow">',
          '<body bg="yellow">',
          "<background>yellow</background>",
        ],
        answer: "",
      },
      {
        question: "<p>What is the correct HTML for creating a hyperlink?</p>",
        code: "",
        options: [
          "<a>http://www.demo.com</a>",
          '<a href="http://www.demo.com">Demo</a>',
          '<a name="http://www.demo.com">Demo</a>',
          '<a url="http://www.demo.com">Demo</a>',
        ],
        answer: '<a href="http://www.demo.com">Demo</a>',
      },
      {
        question:
          "<p>Which element is used for both text and password form fields?</p>",
        code: "",
        options: ["textarea", "form", "input", "select"],
        answer: "input",
      },
      {
        question: "<p>Which of the following is a valid color code?</p>",
        options: ["$505050", "#505050", "505050", "-505050"],
        answer: "#505050",
      },
      {
        question: "<p>What is the proper syntax of a form submit button?</p>",
        code: "",
        options: [
          '<input="submit" />',
          '<input type="button" />',
          '<input type="submit" />',
          "<input>Submit</input>",
        ],
        answer: '<input type="submit" />',
      },
      {
        question:
          "<p>What is correct way to add an image file in the paragraph?</p>",
        code: "",
        options: [
          '<p><img height="100%" width="100%" src="Sample.gif" /></p>',
          '<a><img height="100%" width="100%" src="Sample.gif" /></a>',
          '<p><img src="Sample.gif" /></p>',
          '<p><img height="100%" width="100%">Sample.gif</img></p>',
        ],
        answer: '<a><img height="100%" width="100%" src="Sample.gif" /></a>',
      },
      {
        question: "<p>HTML is the language used to create what?</p>",
        code: "",
        options: [
          "High level",
          "Machine langiage program",
          "Web page",
          "Web serve",
        ],
        answer: "Web page",
      },
      {
        question:
          "<p>Which of the following examples shows correctly nested HTML elements?</p>",
        code: "",
        options: [
          "<html></html><head></head><body></body>",
          "<html><head><head><body><body><html>",
          "<html><head><body></html></head></body>",
          "<html><head></head><body></body></html>",
        ],
        answer: "<html><head></head><body></body></html>",
      },
    ],
    medium: [
      {
        question:
          "What is the difference between “display: none” and “visibility: hidden”?",
        code: "",
        options: [
          "The attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.",
          "The attribute “visibility: none” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: hidden” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.",
          "The attribute “visibility: hidden” for an HTML element then that element won’t be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it will take up space on the webpage.",
        ],
        answer:
          "The attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.",
      },
      {
        question: "What is SVG in HTML?",
        code: "",
        options: [
          "SVG is a binary representation of visual information, such as drawings, pictures, graphs, logos, or individual video frames",
          "SVG is a binary representation of digital information for pictures",
          "SVG is used to describe the vector or raster graphics",
        ],
        answer: "SVG is used to describe the vector or raster graphics",
      },
      {
        question: "What are tags?",
        code: "",
        options: [
          "Tags are elements in HTML that define and format content properly",
          "Tags are elements in HTML that define content properly",
          "Tags are elements in HTML that define form content properly",
        ],
        answer:
          "Tags are elements in HTML that define and format content properly",
      },
      {
        question: "What are the media formats supported by HTML?",
        code: "",
        options: [
          "HTML supports various media types and formats such as audio, video and image",
          "HTML supports various media types and formats such as audio and video",
          "HTML support only video type",
        ],
        answer:
          "HTML supports various media types and formats such as audio, video and image",
      },
      {
        question: "Remove intruder",
        code: "",
        options: ["<sup>", "<style>", "<dialog>", "<web>"],
        answer: "<web>",
      },
      {
        question: "What is correct forming form tags?",
        code: "",
        options: [
          '<form type="submit"><label for="fname">First name:<br><input type="text" id="fname" name="fname"><br></label></form>',
          '<form><label for="fname">First name:</label><br><input type="d" id="fname" name="fname"><br></form>',
          '<form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"><br></form>',
          '<form><label for="fname">First name:</label><br><input type="text" id="name" name="name"><br></form>',
        ],
        answer:
          '<form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname"><br></form>',
      },
      {
        question: "How many graphics are suppored in HTML5?",
        code: "",
        options: [
          "HTML5 supports only Canvas",
          "HTML5 supports two kinds of graphics Canvas and SVG",
          "None",
          "HTML5 supports only SVG",
        ],
        answer: "HTML5 supports two kinds of graphics Canvas and SVG",
      },
      {
        question: "How to create scrollbar?",
        code: '<div class="example">Create croll bar</div>',
        options: [
          "div.example {background-color:light-green; width: 110px; height: 110px; overflow:scroll;}",
          "div example {background-color:light-green; width: 110px; height: 110px; overflow:scroll;}",
          "div.example {background-color:light-green; width: 110px; height: 110px; overflow:hidden;}",
          "div.example {background-color:light-green; width: 110px; height: 110px; overflow:unset;}",
        ],
        answer:
          "div.example {background-color:light-green; width: 110px; height: 110px; overflow:scroll;}",
      },
      {
        question: "What is correct dropdown example?",
        code: "",
        options: [
          '<label for="Animals">Choose a Pet:</label><select name="Animals" id="pets"><option value="Dog">Dog</option><option value="Cat">Cat</option></select>',
          '<label for="Animals">Choose a Pet:</label><option name="Animals" id="pets"><select value="Dog">Dog</select><select value="Cat">Cat</select></option>',
          '<label for="Animals">Choose a Pet:</label><select name="Animals" id="pets"><option value="Dog">Dog</option><option value="Cat">Cat</option></select>',
          '<label for="Animals">Choose a Pet:</label><select name="Animals" id="pets"><option value="Dog">Dog</option><option value="Cat">Cat</option></select>',
        ],
        answer:
          '<label for="Animals">Choose a Pet:</label><select name="Animals" id="pets"><option value="Dog">Dog</option><option value="Cat">Cat</option></select>',
      },
      {
        question: "Create a JavaScript script that changes the text size.",
        code: '<body><p id="demo">Example.</p><script>____</script></body>',
        options: [
          'document.getElement("demo").style.fontSize = "60px";',
          'document.getElementByClass("demo").style.fontSize = "60px";',
          'document.getElementById("demo").style.fontSize = "60px";',
          'document.getElementById("demo").style.size = "60px";',
        ],
        answer: 'document.getElementById("demo").style.fontSize = "60px";',
      },
    ],
    senior: [
      {
        question: "How many kinds of Doctypes are available?",
        code: "",
        options: [
          "There are three types of Doctypes. These include strict, frameset, and transitional",
          "There is only one type of Doctypes and it is strict",
          "There are two types of Doctypes. These include strict and transitional",
          "None",
        ],
        answer:
          "There are three types of Doctypes. These include strict, frameset, and transitional",
      },
      {
        question: "What's the difference between HTML and XHTML?",
        code: "",
        options: [
          "HTML is an acronym for HyperText Market Language. XHTML is an Extensible HyperText Markup Language",
          "HTML is an acronym for HyperText Markup Language. XHTML is an Extensible HyperText Markup Language",
          "There is no difference between HTML and XHTML",
          "HTML is an acronym for HyperToll Markup Language. XHTML is an Extensible HyperToll Markup Language",
        ],
        answer:
          "HTML is an acronym for HyperText Markup Language. XHTML is an Extensible HyperText Markup Language",
      },
      {
        question: "What is a void element in HTML?",
        code: "",
        options: [
          "An HTML element that need to be closed or have a closing tag is also known as a void element",
          "An HTML element that does not need to be closed or have a closing tag is also known as a void element. Like <hr /> and <br />",
          "An HTML element that need to be closed or have a closing tag is also known as a void element. Like <span />, <label />...",
          "An HTML element need to be closed or have a closing tag is also known as a void element. Like <hr /> and <br />",
        ],
        answer:
          "An HTML element that does not need to be closed or have a closing tag is also known as a void element. Like <hr /> and <br />",
      },
      {
        question: "What is cell spacing?",
        code: "",
        options: [
          "The cell spacing attribute specifies how significant the space between cells should be. The space is 2 pixels by default",
          "The cell spacing attribute specifies how significant the space between cells should be. The space is 10 pixels by default",
          "The cell spacing attribute specifies how significant the padding between cells should be.",
          "The cell spacing attribute specifies how significant the padding or margin between cells should be.",
        ],
        answer:
          "The cell spacing attribute specifies how significant the space between cells should be. The space is 2 pixels by default",
      },
      {
        question: "What are the new form input types in HTML5?",
        code: "",
        options: [
          "In HTML5 we don't have new form input type",
          "HTML5 introduced date, time, week, month, email, URL, range, search, color, number, tel, and DateTime-local",
          "HTML5 introduced date, time, week, month and DateTime-local",
          "HTML5 introduced tel and DateTime-local",
        ],
        answer:
          "HTML5 introduced date, time, week, month, email, URL, range, search, color, number, tel, and DateTime-local",
      },
      {
        question:
          "How many tags are necessary to create a web page using HTML5?",
        code: "",
        options: [
          "There is one tag needed to create a webpage in HTML5. This include <body>",
          "There is one tag needed to create a webpage in HTML5. This include <html>",
          "There is a minimum of five tags needed to create a webpage in HTML5. These include <body>, <head>, <div>, <span> and <html>",
          "There is a minimum of three tags needed to create a webpage in HTML5. These include <body>, <head>, and <html>",
        ],
        answer:
          "There is a minimum of three tags needed to create a webpage in HTML5. These include <body>, <head>, and <html>",
      },
      {
        question: "In HTML5, how can you include video or audio on your page?",
        code: "",
        options: [
          "HTML5 offer one tag that help include video and audio into your webpage. It is <audio>",
          "HTML5 offers one tag that help include video and audio into your webpage. It is <video>",
          "HTML5 offers two tags that help include video and audio into your webpage. These tags are <audio> and <video>",
          "We can't include video or audio on page",
        ],
        answer:
          "HTML5 offers two tags that help include video and audio into your webpage. These tags are <audio> and <video>",
      },
      {
        question: "Why is HTML formatting useful?",
        code: "",
        options: [
          "Formatting is a container element into which a site or app can inject the results of a calculation or the outcome of a user action",
          "Formatting represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context",
          "Formatting is used to create interactive controls for web-based forms in order to accept data from the user",
          "Formatting text allows for a more accessible, streamlined look and feel. You can achieve this by using various tags to create text that's bold, underlined, or italicized",
        ],
        answer:
          "Formatting text allows for a more accessible, streamlined look and feel. You can achieve this by using various tags to create text that's bold, underlined, or italicized",
      },
      {
        question: "What is the required attribute?",
        code: "",
        options: [
          "The required attribute can be used in HTML when present, makes the element not mutable.",
          "The required attribute can be used in HTML to make a form field mandatory",
          "The required attribute can be used in HTML when element is indicate the form element",
          "The required attribute can be used in HTML to make the user entered into an <input> or <textarea>",
        ],
        answer:
          "The required attribute can be used in HTML to make a form field mandatory",
      },
      {
        question: "What is an iframe?",
        code: "",
        options: [
          "An Iframe is helpful because you can use it to embed an additional document within the present HTML document. It is written as <iframe>",
          "An Iframe is element represents the root (top-level element) of an HTML document, so it is also referred to as the root element",
          "An Iframe is helpful because you can use it to embed an additional video within the present HTML document. It is written as <iframe>",
          "An Iframe is helpful because you can use it to embed an additional document within the present HTML document. It is written as <frame>",
        ],
        answer:
          "An Iframe is helpful because you can use it to embed an additional document within the present HTML document. It is written as <iframe>",
      },
    ],
  },
  css: {
    junior: [
      {
        question: "<p>What does CSS stand for?<p>",
        code: "",
        options: [
          "Colorful Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "<p>How the order of specificity rule which has precedence respectively in CSS?</p>",
        code: "",
        options: [
          "Inline style, Classes, Id selector",
          "Inline style, Id selector, Classes",
          " Id selector, Classes, Inline style",
          "There are no rules",
        ],
        answer: "Inline style, Id selector, Classes",
      },
      {
        question: "<p>How many position do we have in CSS?</p>",
        code: "",
        options: ["4", "5", "6", "7"],
        answer: "6",
      },
      {
        question:
          "<p>Which HTML tag is used to define an internal style sheet?</p>",
        code: "",
        options: ["<script>", "<style>", "<css>"],
        answer: "<style>",
      },
      {
        question: "<p>Which is the correct CSS syntax?</p>",
        code: "",
        options: [
          "div:color=red;",
          "{div:color=red;}",
          "div=color:red;",
          "div{color=red;}",
        ],
        answer: "div{color=red;}",
      },
      {
        question:
          "<p>How do you add a background color for all <h1> elements?</p>",
        code: "",
        options: [
          "h1.all {background-color: #ffffff}",
          "all.h1 {background-color: #ffffff}",
          "h1{background-color: #ffffff}",
          "h1.all[background-color: #ffffff]",
        ],
        answer: "h1{background-color: #ffffff}",
      },
      {
        question:
          "<p>What is the correct CSS syntax for making all the <p> elements bold?</p>",
        code: "",
        options: [
          "p{font-weight: bold;}",
          "p{weight: bold;}",
          "p{font-weight: 20px;}",
          "p font-weight: bold;",
        ],
        answer: "p{font-weight: bold;}",
      },
      {
        question: "<p>How do you display hyperlinks without an underline?</p>",
        code: "",
        options: [
          "a{decoration:no-underline}",
          "a{text-decoration:none}",
          "a{text-decoration:no-underline}",
          "a{underline:none}",
        ],
        answer: "",
      },
      {
        question:
          "<p>How do you make each word in a text start with a capital letter?</p>",
        code: "",
        options: [
          "You can't do taht with CSS",
          "text-style: capitalize",
          "text-transform: capitalize",
          "transform:capitalize",
        ],
        answer: "text-transform: capitalize",
      },
      {
        question: "<p>How do you display a border like this:</p>",
        code: "<p>The top border = 10 pixels</p><p>The bottom border = 5 pixels</p><p>The left border = 20 pixels</p><p>The right border = 1pixel?</p>",
        options: [
          "border-width:10px 1px 5px 20px;",
          "border-width:10px 1px 5px 20px",
          "border-width:1px 5px 10px 20px;",
          "border-width:20px 10px 5px 1px;",
        ],
        answer: "border-width:10px 1px 5px 20px;",
      },
    ],
    medium: [
      {
        question: "How do you select elements with class name 'test'?",
        code: "",
        options: ["#test", "test", ".test", "*test"],
        answer: ".test",
      },
      {
        question: "How do you group selectors?",
        code: "",
        options: [
          "Separate each selector with a space",
          "Separate each selector with a plus sign",
          "Separate each selector with a comma",
        ],
        answer: "Separate each selector with a comma",
      },
      {
        question: "What is meant by RGB stream?",
        code: "",
        options: [
          "RGB represents colors in CSS. The three streams are namely Red, Green, and Blue.",
          "RGB represents colors in CSS. The three streams are namely Red, Grey, and Yellow.",
          "RGB represents box-shadow in CSS. The two streams are namely position and color",
          "None of the answers offered",
        ],
        answer:
          "RGB represents colors in CSS. The three streams are namely Red, Green, and Blue.",
      },
      {
        question: "How can you target h3 and h2 with the same styling",
        code: "",
        options: [
          ,
          "h2 h3 {color: red;}",
          "h2, h3 {color: red;}",
          "h2 > h3 {color: red;}",
          "h3 {color:red;}",
        ],
        answer: "h2, h3 {color: red;}",
      },
      {
        question: "What is Sass?",
        code: "",
        options: [
          "Syntactically Awesome Style Sheets",
          "Syntactically Leener  Style Sheets",
          "Syntactically Style Sheets",
          "Style Sheets",
        ],
        answer: "Syntactically Awesome Style Sheets",
      },
      {
        question:
          "Does margin-top or margin-bottom have an effect on inline elements?",
        code: "",
        options: [
          "Yes, margin-top or margin-bottom does have an effect on the inline elements",
          "No, margin-top or margin-bottom does not have an effect on the inline-block elements",
          "Only margin-top does't have effet but margin-bottom does have an effect on the inline elements",
          "No, margin-top or margin-bottom does not have an effect on the inline elements",
        ],
        answer:
          "No, margin-top or margin-bottom does not have an effect on the inline elements",
      },
      {
        question: "Different Box Sizing Property?",
        code: "",
        options: [
          "Padding-box and Border-box",
          "There are no different.",
          "Content-box, Width-box and Color-box",
          "Content-box, Padding-box and Border-box",
        ],
        answer: "Content-box, Padding-box and Border-box",
      },
      {
        question: "How media types in CSS work?",
        code: "",
        options: [
          "There is only one type of media propetie is screen",
          "The four types of media properties are print, speech, and screen",
          "The three types of media properties are print, speech, and screen",
          "The two types of media properties are print and screen",
        ],
        answer:
          "The three types of media properties are print, speech, and screen",
      },
      {
        question: "What does !important mean in CSS?",
        code: "",
        options: [
          "The style “!important” in the CSS has the second precedence. Also, the cascaded property will be overridden with it.",
          "The style “!important” in the CSS has the highest precedence.",
          "The style “!important” in the CSS has the highest precedence. The cascaded property won't be overridden with it.",
          "The style “!important” in the CSS has the highest precedence. Also, the cascaded property will be overridden with it.",
        ],
        answer:
          "The style “!important” in the CSS has the highest precedence. Also, the cascaded property will be overridden with it.",
      },
      {
        question: "What are the position states in CSS?",
        code: "",
        options: [
          "The three-position states in CSS are relative, static and absolute. The default position state is static.",
          "The four-position states in CSS are relative, static, absolute and fixed. The default position state is static.",
          "The five-position states in CSS are relative, static, absolute, fixed and sticky. The default position state is relative.",
          "The five-position states in CSS are relative, static, absolute, fixed and sticky. The default position state is static.",
        ],
        answer:
          "The five-position states in CSS are relative, static, absolute, fixed and sticky. The default position state is static.",
      },
    ],
    senior: [
      {
        question: "What is the different of flexbox and gridbox",
        code: "",
        options: [
          "There are bouth two-dimensional layout in CSS",
          "Flexbox is one-dimensional and grid is two-dimensional layout in CSS",
          "There are bouth one-dimensional layout in CSS",
          "There is no difference between them",
        ],
        answer:
          "Flexbox is one-dimensional and grid is two-dimensional layout in CSS",
      },
      {
        question: "What is the purpose of the CSS opacity property?",
        code: "",
        options: [
          "he CSS opacity property is used to control the transparency of an element. It accepts a value 0 (completely transparent).",
          "he CSS opacity property is used to control the transparency of an element. It accepts a value 1 (fully opaque).",
          "The CSS opacity property is used to control the transparency of an element. It accepts a value between 0 (completely transparent) and 5 (fully opaque).",
          "The CSS opacity property is used to control the transparency of an element. It accepts a value between 0 (completely transparent) and 1 (fully opaque).",
        ],
        answer:
          "The CSS opacity property is used to control the transparency of an element. It accepts a value between 0 (completely transparent) and 1 (fully opaque).",
      },
      {
        question:
          "How to apllay CSS styles to only the first letter of paragraph?",
        code: "",
        options: [
          "p:nth-child(1){font-size: 2em; font-weight: bold; color: blue;}",
          "p::first-letter{font-size: 2em; font-weight: bold; color: blue;}",
          "p::after{font-size: 2em; font-weight: bold; color: blue;}",
          "p:only-child{font-size: 2em; font-weight: bold; color: blue;}",
        ],
        answer:
          "p::first-letter{font-size: 2em; font-weight: bold; color: blue;}",
      },
      {
        question: "How would you implement a custom checkbox using only CSS?",
        code: "",
        options: [
          '<label class="custom-checkbox"> <checkbox hidden/> </label>',
          '<label class="custom-checkbox"> <input type="checkbox" hidden/> <span class="checkmark"></span> </label>',
          '<label class="custom-checkbox"> <input type="checkbox" hidden/> <span class="checkmark"></span> </label>',
          '<label class="custom-checkbox"> <input type="checkbox" hidden/> <span class="checkmark"></span> </label>',
        ],
        answer:
          '<label class="custom-checkbox"> <input type="checkbox" hidden/> <span class="checkmark"></span> </label>',
      },
      {
        question:
          "What is the differences between the CSS selectors :nth-child() and :nth-of-type()?",
        code: "",
        options: [
          "<p>:nth-child(): Regardless of type, this function chooses elements based on where they are in a group of siblings.</p><p>:nth-of-type(): Chooses components of a particular type according to where they fall in a sibling group.</p>",
          "<p>:nth-child(): Regardless of type, this function chooses elements based on where they are in a group of siblings.</p><p>:nth-of-type(): Chooses components of a particular type according to where they fall in a sibling group.</p>",
          "<p>:nth-child(): Chooses components of a particular type according to where they fall in a sibling group.</p><p>:nth-of-type(): Regardless of type, this function chooses elements based on where they are in a group of siblings.</p>",
          "<p>:nth-child(): Regardless of type, this function chooses elements based on where they are in a group of siblings.</p><p>:nth-of-type(): Chooses components of a particular type according to where they fall in a sibling group.</p>",
        ],
        answer:
          "<p>:nth-child(): Regardless of type, this function chooses elements based on where they are in a group of siblings.</p><p>:nth-of-type(): Chooses components of a particular type according to where they fall in a sibling group.</p>",
      },
      {
        question: "What is the difference between ::before and :before?",
        code: "",
        options: [
          "That ::before is the correct and modern notation for CSS3 pseudo-elements and point out that :before was used in CSS2. The double-colon syntax (::) distinguishes pseudo-elements from pseudo-classes like :hover. Otherwise, both perform the same function.",
          "That ::before is the correct and modern notation for CSS2 pseudo-elements and point out that :before was used in CSS3. The double-colon syntax (::) distinguishes pseudo-elements from pseudo-classes like :hover. Otherwise, both perform the same function.",
          "That ::before is the correct and modern notation for CSS3 pseudo-classes and point out that :before was used in CSS2. The double-colon syntax (::) distinguishes pseudo-classes from pseudo-classes like :hover. Otherwise, both perform the same function.",
          "That ::before is the correct and modern notation for CSS3 pseudo-elements and point out that :before was used in CSS2. The double-colon syntax (::) distinguishes pseudo-elements from pseudo-classes like :hover. Otherwise, both perform the same function.",
        ],
        answer:
          "That ::before is the correct and modern notation for CSS3 pseudo-elements and point out that :before was used in CSS2. The double-colon syntax (::) distinguishes pseudo-elements from pseudo-classes like :hover. Otherwise, both perform the same function.",
      },
      {
        question: "What is the use of the calc() function in CSS?",
        code: "",
        options: [
          "The calc() CSS function lets you perform animation.",
          "The calc() CSS function lets you perform to display value.",
          "The calc() CSS function lets you perform what is false or true.",
          "The calc() CSS function lets you perform calculations when specifying CSS property values.",
        ],
        answer:
          "The calc() CSS function lets you perform calculations when specifying CSS property values.",
      },
      {
        question: "What is the difference between SCSS and SASS?",
        code: "",
        options: [
          "There is no difference between SCSS and SASS.",
          "The main difference between SCSS and SASS is the syntax. SCSS (Sassy CSS) is a CSS pre-processor that uses the syntax of CSS, while SASS (Syntactically Awesome Style Sheets) uses the syntax of the Ruby programming language.",
          "The main difference between SCSS and SASS is the syntax. SCSS (Sassy CSS) uses the syntax of the Ruby programming language, while SASS (Syntactically Awesome Style Sheets) is a CSS pre-processor that uses the syntax of CSS.",
        ],
        answer:
          "The main difference between SCSS and SASS is the syntax. SCSS (Sassy CSS) is a CSS pre-processor that uses the syntax of CSS, while SASS (Syntactically Awesome Style Sheets) uses the syntax of the Ruby programming language.",
      },
      {
        question: "What is a @extend function used for in Sass?",
        code: "",
        options: [
          "The @EXTEND directive provides a multi way to allow a selector to inherit the styles of another one.",
          "Is used for the code bloat by grouping selectors that share the same style into one rule.",
          "The @EXTEND directive provides a simple way to allow a selector to inherit the styles of another one.",
        ],
        answer:
          "The @EXTEND directive provides a simple way to allow a selector to inherit the styles of another one.",
      },
      {
        question: "what is the use of the @IMPORT function in Sass?",
        code: "",
        options: [
          "The @IMPORT function in Sass are: files are merged into a multiple outputted CSS file.",
          "The @IMPORT function in Sass are: files are merged into a single outputted CSS file, can virtually mix and match any file and be certain of all your styles and Extends the CSS import rule by enabling import of SCSS and Sass files",
          "The @IMPORT function in Sass are: files are merged into a single outputted CSS file and can't virtually mix and match file and be certain of all your styles.",
        ],
        answer:
          "The @IMPORT function in Sass are: files are merged into a single outputted CSS file, can virtually mix and match any file and be certain of all your styles and Extends the CSS import rule by enabling import of SCSS and Sass files.",
      },
    ],
  },
  javascript: {
    junior: [
      {
        question: "What is the output of below code?",
        code: "<p>var car = new Vehicle('Honda', 'white', '2010', 'UK');</p><p>console.log(car);</p><p>function Vehicle(model, color, year, country) {</p><ul><li>this.model = model;</li><li>this.color = color;</li><li>this.year = year;</li><li>this.country = country;</li></ul>}",
        options: [
          "Undefined",
          "ReferenceError",
          "null",
          "{model: 'Honda', color: 'white', year: '2010', country: 'UK'}",
        ],
        answer: "{model: 'Honda', color: 'white', year: '2010', country: 'UK'}",
      },
      {
        question: "What is the output of below code?",
        code: '<p>Number("1") - 1 == 0</p>',
        options: ["false", "true", "NaN", "undefined"],
        answer: "true",
      },
      {
        question: "What is the output of below code?",
        code: "<p>function main(){</p><p>console.log('A');</p><p>setTimeout(</p><p>function print(){ console.log('B'); }</p><p>,0);</p><p>console.log('C');</p><p>}</p><p>main();</p>",
        options: ["A, B and C", "B, A and C", "A and C", "A, C and B"],
        answer: "A, C and B",
      },
      {
        question: "What is the output of below code?",
        code: "<p>console.log(1 < 2 < 3);",
        options: ["true", "false", "SyntaxError"],
        answer: "true",
      },
      {
        question: "What is the output of below code?",
        code: '<p>let msg = "Good morning!!"</p><p>msg.name = "John";</p><p>console.log(msg.name)</p>',
        options: ['""', "Error", "John", "Undefiend"],
        answer: "Undefiend",
        explanation:
          "Even though msg.name = 'John'; does not throw an error, the name property is not retained because msg is a primitive string. When you try to access msg.name, it does not exist on the primitive string, hence it returns undefined.",
      },
      {
        question: "What is the output of below code?",
        code: "<p>const obj = {'key': 'value'};</p><p>const array = [...obj];</p><p>console.log(array)</p>",
        options: ["['key', 'value']", "TypeError", "[]", "['key']"],
        answer: "TypeError",
      },
      {
        question: "What is the output of below code?",
        code: "<p>console.log('Starting');</p><p>SetTimeout(() => { console.log('2 Second Timer');}, 2000)</p><p>setTimeout(() => { console.log('0 Second Timer');},0)</p><p>console.log('Stopping')</p>",
        options: [
          "Starting, 2 Second Timer, 0 Second Timer, Stopping",
          "Starting, 0 Second Timer, 2 Second Timer ,Stopping",
          "Starting, Stopping, 0 Second Timer, 2 Second Timer",
          "2 Second Timer, 0 Second Timer, Starting, Stopping",
        ],
        answer: "Starting, Stopping, 0 Second Timer, 2 Second Timer",
      },
      {
        question: "What is the output of below code?",
        code: '<p>var elem;</p><p>if (11 == 11 && 12 < 10) {</p><p> elem = 12;</p><p>} else {</p><p>elem = "undefined";</p><p>}</p>',
        options: ["true", "12", "Error", "undefined"],
        answer: "undefined",
      },
      {
        question: "What is the output of below code?",
        code: "<p>console.log(12%5)</p>",
        options: ["7", "2", "60", "17"],
        answer: "2",
      },
      {
        question: "What is the output of below code?",
        code: "<p>a = (new Array(10)).toString()</p><p>console.log(a);</p>",
        options: [
          'string "10"',
          "array of 10 empty strings",
          '",,,,,,,,,,"',
          "Error",
        ],
        answer: '",,,,,,,,,,"',
      },
    ],
    medium: [
      {
        question: "What is the output of below code?",
        code: "<p>console.log(1);</p><p>setTimeout(function () { </p>console.log(2); <p>},0);</p><p>Promise.resolve()<p>.then(function() {</p><p>console.log(3); })</p><p>.then(function() { </p><p>console.log(4);</p><p>});</p>",
        options: ["1,2,3,4", "1,3,2,4", "2,3,4,1", "1,3,4,2"],
        answer: "1,3,4,2",
      },
      {
        question: "What is the output of below code?",
        code: "new String('This is a string') instanceof String;",
        options: ["true", "false", "undefined", "TypeError"],
        answer: "true",
      },
      {
        question: "What is the output of below code?",
        code: '"1" -- "1"',
        options: [2, 0, "error", '"11"'],
        answer: "2",
      },
      {
        question: "What is the output of below code?",
        code: "new Array(5).toString();",
        options: ["[]", '"[]"', "[5,5,5,5,5]", '",,,,,"'],
        answer: '",,,,,"',
      },
      {
        question: "What is the output of below code?",
        code: "<p>function aaa(){</p><p>return</p><p>{ <p>test: 1</p><p>};</p><p>}</p><p>alert(typeof aaa());</p>",
        options: ["function", "object", "undefined", "number"],
        answer: "undefined",
      },
      {
        question: "What is the output of below code?",
        code: "<p>function foo() {</p><p>let x = y = 1;</p><p>x++;</p><p>y++;</p><p>return x;</p><p>}</p><p>console.log(foo(), typeof x, typeof y);</p>",
        options: [
          "1, undefined and undefined",
          "ReferenceError: x is not defined",
          "1, undefined and number",
          "1, number and number",
        ],
        answer: "1, undefined and number",
      },
      {
        question: "What is the output of below code?",
        code: "(true + false) > 2 + true",
        options: ["NaN", "false", "true", "TypeError"],
        answer: "false",
      },
      {
        question: "What is the output of below code?",
        code: "String('Hello') === 'Hello';",
        options: ["true", "false", "TypeErorr"],
        answer: "true",
      },
      {
        question: "What is the output of below code?",
        code: "<p>var x = 3;</p><p> var foo = {</p><p>x: 2,</p><p>baz: {</p><p>x: 1,</p><p>bar: function() {</p><p>return this.x;</p><p>}</p><p>}</p><p>}</p><p>var go = foo.baz.bar;</p><p>alert(go());</p><p>alert(foo.baz.bar());</p>",
        options: ["1,3", "3,1", "2,1", "1,2"],
        answer: "3,1",
      },
      {
        question: "What is the output of below code?",
        code: "<p>function bar() {</p><p>return foo;</p><p>foo = 10;</p><p>function foo() {}</p><p>var foo = '11'</p><p>}</p><p>alert(typeof bar());</p>",
        options: ["undefined", "function", "array", "object"],
        answer: "function",
      },
    ],
    senior: [
      {
        question: "What is the output of below code?",
        code: "<p>console.log(1 < 2 < 3);</p><p>console.log(3 > 2 > 1);</p>",
        options: [
          "true, true",
          "true, false",
          "SyntaxError, SyntaxError",
          "false, false",
        ],
        answer: "true, false",
      },
      {
        question: "What is the output of below code?",
        code: "<p>const obj = {'key': 'value'}</p><p>const array = [...obj];</p><p>console.log(array)</p>",
        options: ["['key': 'value']", "[]", "TypeError", "['key']"],
        answer: "TypeError",
      },
      {
        question: "What is the output of below code?",
        code: "<p>(function () {})()</p>",
        options: ["true", "false", "undefined", "Error in the code"],
        answer: "undefined",
      },
      {
        question: "What is the output of below code?",
        code: "~~(-5.5)",
        options: ["5", "-6", "-5", "Error in the code"],
        answer: "-5",
      },
      {
        question: "What is the output of below code?",
        code: "<p>a = 5;</p><p>b= 4</p><p>alert(a + +(+(+(+b))));</p>",
        options: ["9", "14", "19", "18"],
        answer: "9",
      },
      {
        question: "What is the output of below code?",
        code: "?,,,,? == Array(4)",
        options: ["false", "true", "undefined"],
        answer: "false",
      },
      {
        question: "What is the output of below code?",
        code: "parseInt(null, 24) === 23",
        options: ["false", "true", "undefined"],
        answer: "true",
      },
      {
        question: "What is the output of below code?",
        code: "<p>[1,2,3,4][1,2]</p>",
        options: ["4", "30", "10", "3"],
        answer: "3",
      },
      {
        question: "What is the output of below code?",
        code: "<p>alert(parseInt(1/0, 19));</p>",
        options: ["19", "18", "20", "NaN"],
        answer: "18",
      },
      {
        question: "What is the output of below code?",
        code: "<p>function() {</p><p>var a = 10;</p><p>if(a > 5) {</p><p>a = 7;</p><p>}</p><p>alert(a)</p><p>}</p>",
        options: ["5", "7", "10", "null"],
        answer: "7",
      },
    ],
  },
};

const selectionContainer = document.getElementById("selection-container");
const testElement = document.getElementById("test");
const resetButton = document.getElementById("reset");

let questionElement;
let optionsElement;
let codeElement;

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let selectedCategory = "";
let selectedDifficulty = "";
let selectedQuizData = [];
let timer;
let timeLeft = 60;

document.getElementById("start-test").addEventListener("click", startQuiz);
resetButton.addEventListener("click", resetQuiz);

function startQuiz() {
  selectedCategory = document.getElementById("category").value;
  selectedDifficulty = document.getElementById("level").value;
  selectedQuizData = quizData[selectedCategory][selectedDifficulty];
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  timeLeft = 60;

  selectionContainer.style.display = "none";
  testElement.style.display = "block";
  resetButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetTimer();
  const question = selectedQuizData[currentQuestion];
  questionElement = document.getElementById("question");
  optionsElement = document.getElementById("options");
  codeElement = document.getElementById("code");

  questionElement.innerHTML = question.question;
  codeElement.innerHTML = question.code;
  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
  startTimer(); // Start the timer for each new question
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = selectedQuizData[currentQuestion].answer;
  const userAnswer = selectedButton.innerText;

  userAnswers.push(userAnswer);

  if (userAnswer === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < selectedQuizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);
  testElement.innerHTML = `<h1>Test for <span class="selected-level">${selectedDifficulty}</span> level in ${selectedCategory.toUpperCase()} is completed!</h1> <p>Your score: ${score}/${
    selectedQuizData.length
  }</p> <div class="answers"><ul id="user-answers"></ul></div> <button id="reset">Reset</button>`;
  const userAnswersElement = document.getElementById("user-answers");
  selectedQuizData.forEach((question, index) => {
    const isCorrect = userAnswers[index] === question.answer;
    const listItem = document.createElement("li");

    const questionText = document.createElement("p");
    questionText.textContent = `Question: ${question.question}`;
    listItem.appendChild(questionText);

    if (question.code) {
      const codeText = document.createElement("p");
      codeText.textContent = question.code;
      listItem.appendChild(codeText);
    }

    const userAnswerText = document.createElement("p");
    const userAnswerSpan = document.createElement("span");
    userAnswerSpan.className = `answer ${isCorrect ? "correct" : "incorrect"}`;
    userAnswerSpan.textContent = userAnswers[index];
    userAnswerText.innerHTML = "<strong>Your Answer:</strong> ";
    userAnswerText.appendChild(userAnswerSpan);
    listItem.appendChild(userAnswerText);

    const correctAnswerText = document.createElement("p");
    correctAnswerText.textContent = `Correct Answer: ${question.answer}`;
    listItem.appendChild(correctAnswerText);

    const separator = document.createElement("p");
    separator.textContent =
      "________________________________________________________";
    listItem.appendChild(separator);

    userAnswersElement.appendChild(listItem);
  });

  document.getElementById("reset").addEventListener("click", resetQuiz);
}



function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").innerText = timeLeft; // Ensure timerElement is updated here
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer({ target: { innerText: "No Answer" } });
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 60;
  document.getElementById("time-left").innerText = timeLeft; // Ensure timerElement is updated here
}

function resetQuiz() {
  selectionContainer.style.display = "block";
  testElement.style.display = "none";
  resetButton.style.display = "none";
  testElement.innerHTML = `<div id="timer">Time Left: <span id="time-left">60</span>s</div> <div class="question-container" id="question-container"> <div class="question" id="question-1"> <div class="question-text" id="question"></div> <div class="code" id="code"></div> <div class="options" id="options"></div> </div> </div>`;

  // Reinitialize elements
  questionElement = document.getElementById("question");
  optionsElement = document.getElementById("options");
  codeElement = document.getElementById("code");

  // Reinitialize event listeners
  document.getElementById("start-test").addEventListener("click", startQuiz);
  document.getElementById("reset").addEventListener("click", resetQuiz);
}

// English for IT — 4 independent practice exams, 50 questions each.
const makeExam = (mc, terms, defs, match, words, fills, tfPassage, tf, readingPassage, reading) =>
  ({mc,terms,defs,match,words,fills,tfPassage,tf,readingPassage,reading});

const exams = [
makeExam(
[
["Which professional writes and tests software?",["Network administrator","Software developer","IT salesperson","Technician"],1],
["What does a help desk provide?",["Technical assistance","Online shopping","Advertising","Games"],0],
["Which skill is important in an IT team?",["Avoiding communication","Ignoring users","Problem-solving and communication","Working without a plan"],2],
["Which component is often called the brain of a computer?",["CPU","Monitor","Keyboard","Mouse"],0],
["Which is an input device?",["Speaker","Monitor","Keyboard","Projector"],2],
["What does an operating system do?",["Design websites","Manage computer resources","Create online stores","Replace hardware"],1],
["What does HTML define?",["Web page structure","Network cables","Database passwords","Power supply"],0],
["Which language styles web pages?",["SQL","CSS","FTP","SMTP"],1],
["What is a web browser used for?",["Viewing websites","Repairing CPUs","Managing electricity","Encrypting disks"],0],
["What is a database?",["Organized collection of data","A monitor","A network cable","A keyboard"],0],
["Which language queries relational databases?",["HTML","CSS","SQL","HTTP"],2],
["A database table contains _____.",["Rows and columns","Only images","Routers","Web addresses only"],0],
["E-commerce means _____.",["Buying and selling online","Repairing hardware","Creating operating systems","Connecting printers"],0],
["Which is an online payment method?",["Digital wallet","CPU","RAM","Ethernet cable"],0],
["LAN stands for _____.",["Local Area Network","Large Access Number","Long Application Node","Linked Account Name"],0],
["Which device forwards data between networks?",["Keyboard","Router","Scanner","Webcam"],1],
["Bandwidth describes _____.",["Network data-carrying capacity","Monitor size","Number of keys","Database password"],0],
["A user cannot connect to Wi-Fi. What should support staff do first?",["Replace the PC","Check the connection and ask questions","Delete files","Disable security"],1],
["Troubleshooting is _____.",["Finding and fixing problems","Selling equipment","Writing reviews","Designing logos"],0],
["Which is a safe password practice?",["Use 123456","Reuse one password","Use a long unique password","Share it with friends"],2]
],
["Programmer","CPU","HTML","SQL","E-commerce","Router","Help desk","Firewall","Backup","Phishing"],
["Copy of important data","Defines web page structure","Assists users with technical issues","Processes instructions","Buying and selling online","Filters network traffic","Writes computer code","Trick to steal sensitive information","Forwards network data","Queries relational databases"],
["G","D","B","J","E","I","C","F","A","H"],
["developer","hardware","browser","database","transaction","router","troubleshooting","backup","phishing","ergonomics"],
["A software _____ creates and maintains programs.","The physical parts of a computer are called _____.","A web _____ is used to access websites.","A _____ stores information in an organized way.","An online purchase is an e-commerce _____.","A _____ connects networks and forwards data.","_____ is the process of finding and fixing technical problems.","A _____ is a copy of data that can be restored.","_____ tricks people into revealing private information.","Good _____ helps prevent injuries when using a computer."],
{title:"Safe and Responsible Use of IT",paragraphs:["IT employees may develop software, manage computer systems, build websites, maintain databases and support users. Communication helps teams understand problems and deliver useful solutions.","Organizations use networks and online services for e-commerce. They protect systems with strong passwords, updates, backups and firewalls. Employees should avoid suspicious links and protect confidential information.","Computer safety matters too. Users should take breaks, sit comfortably and position screens at a suitable height. Ergonomic habits can reduce eye strain and muscle pain."]},
[["IT employees may work with software, networks and databases.",true],["Strong passwords and backups can help protect information.",true],["Employees should open every suspicious link.",false],["Ergonomics is related to safe computer use.",true],["IT support never helps computer users.",false]],
{title:"Websites, Databases and Online Shopping",paragraphs:["An online store is a website where customers browse products and place orders. It usually has product pages, a shopping cart and a checkout page. HTML provides structure, while CSS controls appearance.","When a customer places an order, the website sends information to a database. The database stores product details, customer records and order information. An application can use SQL to retrieve or update records.","E-commerce systems must protect customer information. Secure connections, access control and reliable backups reduce risks. A clear checkout process and helpful IT support improve customer experience."]},
[["What can customers do on an online store?",["browse products","place orders"]],["What does HTML provide?",["page structure"]],["What information can a database store?",["product details","customer records","order information"]],["Which language can retrieve database records?",["sql"]],["Name three ways to protect an e-commerce system.",["secure connections","access control","backups"]]]
),
makeExam(
[
["Who usually manages an organization's computer network?",["Graphic designer","Network administrator","Accountant","Web customer"],1],
["A system analyst mainly _____.",["studies business and system requirements","sells keyboards","delivers parcels","repairs office chairs"],0],
["Which is a useful soft skill for IT professionals?",["Clear communication","Ignoring feedback","Avoiding teamwork","Guessing"],0],
["Which memory is temporary and loses data when power is off?",["ROM","SSD","RAM","DVD"],2],
["Which device displays visual output?",["Monitor","Mouse","Microphone","Scanner"],0],
["Which component stores files permanently?",["CPU cache only","SSD","RAM","Cooling fan"],1],
["What is the purpose of an operating system interface?",["Allow users to interact with the computer","Increase screen size","Print documents automatically","Connect a website domain"],0],
["Which HTML element creates a hyperlink?",["&lt;p&gt;","&lt;a&gt;","&lt;img&gt;","&lt;table&gt;"],1],
["What does responsive web design help a website do?",["Adapt to different screen sizes","Delete database records","Block all users","Replace a server"],0],
["What is a domain name?",["A human-readable website address","A type of RAM","A database row","A power cable"],0],
["Which one is a relational database management system?",["MySQL","CSS","Bluetooth","Windows Explorer"],0],
["In a table, a row is also called a _____.",["record","field","query language","router"],0],
["What is a primary key used for?",["Uniquely identify a record","Decorate a web page","Compress a video","Connect two monitors"],0],
["Why do online stores use a shopping cart?",["To collect items before checkout","To cool the server","To scan for viruses","To create a domain name"],0],
["HTTPS helps protect data by using _____.",["encryption","a larger monitor","more RAM","public passwords"],0],
["Which network covers a small area such as an office?",["LAN","WAN","Internet backbone","Satellite TV"],0],
["What does Wi-Fi allow devices to do?",["Connect to a network wirelessly","Print without electricity","Store SQL tables","Create HTML tags"],0],
["A customer reports a printer problem. What should support staff check?",["Power, cable and printer status","The website domain","The database primary key","The shopping cart"],0],
["Why should IT staff document a support ticket?",["To record the issue and its resolution","To hide the problem","To delete user accounts","To slow the network"],0],
["What is malware?",["Software designed to cause harm","A secure backup","A web browser","A network standard"],0]
],
["Analyst","RAM","SSD","Domain","Hyperlink","Primary key","Record","Shopping cart","HTTPS","Malware"],
["A unique identifier for a table row","A harmful or malicious program","A human-readable website address","Temporary working memory","A clickable link to another page","A collection of items selected for purchase","A person who studies system requirements","Permanent data storage","A secure version of HTTP","A single row in a database table"],
["G","D","H","C","E","A","J","F","I","B"],
["analyst","monitor","operating system","hyperlink","domain","record","primary key","shopping cart","wireless","malware"],
["A business _____ studies user needs and system requirements.","A _____ shows text, images and video from a computer.","An _____ manages hardware and software resources.","A clickable _____ takes a visitor to another page.","A website's name on the Internet is its _____.","A database _____ represents one complete row of information.","A _____ uniquely identifies each row in a table.","An online _____ keeps selected products before checkout.","Wi-Fi is a _____ network technology.","_____ is software designed to damage or misuse a system."],
{title:"Building and Maintaining Computer Systems",paragraphs:["IT teams include developers, analysts and network administrators. They need technical knowledge as well as communication and teamwork. A system analyst gathers requirements before a solution is designed.","A computer uses RAM for temporary working data and an SSD for long-term storage. The operating system manages these resources and provides an interface for users.","Websites use HTML for structure and links between pages. Responsive design helps pages work on phones and desktop computers. IT staff should test systems, document problems and keep software updated."]},
[["IT professionals need communication skills as well as technical skills.",true],["RAM is normally used for permanent file storage.",false],["An SSD can store files when the computer is turned off.",true],["Responsive design helps websites adapt to different screens.",true],["A system analyst should ignore user requirements.",false]],
{title:"A New Website Project",paragraphs:["A small company wants to build a website for its services. First, a system analyst interviews employees and writes down the requirements. A web developer then creates the pages using HTML and styles them with CSS.","The website has a domain name so customers can find it online. It uses a database to store customer enquiries. Each enquiry is saved as a record, and a primary key helps identify it. The company also tests the website on phones and computers.","After launch, the IT team monitors the website, fixes reported problems and installs updates. Support tickets help the team record what happened and how each issue was solved."]},
[["Who gathers the website requirements?",["system analyst","analyst"]],["Which languages are mentioned for building and styling pages?",["html","css"]],["What does the database store?",["customer enquiries","enquiries"]],["What helps identify each enquiry record?",["primary key"]],["Why does the IT team use support tickets?",["record what happened","how each issue was solved"]]]
),
makeExam(
[
["What is the main purpose of a database?",["Organize and store data","Cool a computer","Display web pages","Connect a mouse"],0],
["Which SQL command retrieves data?",["SELECT","DELETE","DROP","SHUTDOWN"],0],
["What does a foreign key usually do?",["Links related tables","Styles a page","Encrypts a monitor","Measures bandwidth"],0],
["Which service lets customers pay electronically?",["Payment gateway","CPU scheduler","File manager","Text editor"],0],
["What does a shopping cart store?",["Products selected by a shopper","Router settings","Employee passwords in plain text","Operating system files"],0],
["What is a benefit of e-commerce?",["Customers can shop online","It always removes fraud","It never needs a network","It works without a server"],0],
["Which protocol is commonly used to transfer web pages securely?",["HTTPS","FTP only","ARP","DHCP"],0],
["What does an IP address identify?",["A device or network interface on an IP network","A database column","A website's font","A CPU model"],0],
["What is a WAN?",["Wide Area Network","Wireless Access Name","Web Application Number","Wide Account Node"],0],
["Which device connects multiple devices within a LAN?",["Switch","Microphone","Projector","Webcam"],0],
["What is a database query?",["A request to retrieve or change data","A computer screen","A type of cable","A user manual"],0],
["Why are database backups important?",["They help restore lost data","They increase monitor brightness","They replace passwords","They remove all network traffic"],0],
["Which checkout detail should an online shop protect?",["Payment information","Public product title","Website logo","Public store address"],0],
["What is a digital wallet?",["An electronic payment tool","A physical network switch","A database table","A type of monitor"],0],
["What does DNS do?",["Translates domain names into IP addresses","Encrypts every file","Stores shopping carts","Repairs hard drives"],0],
["What does a firewall do?",["Controls network traffic using security rules","Creates HTML headings","Adds RAM","Prints receipts"],0],
["What is latency?",["Time delay in data communication","Storage capacity","Screen resolution","Number of database tables"],0],
["What should be checked when a network is slow?",["Connection, bandwidth and network devices","Only the wallpaper","The keyboard language","The shopping cart color"],0],
["What is a service-level agreement (SLA)?",["An agreement defining service expectations","A type of malware","A database key","A web browser"],0],
["Why should an online store use HTTPS?",["To protect data sent between browser and website","To make images larger","To remove the database","To disable authentication"],0]
],
["Database","Query","Foreign key","Payment gateway","Shopping cart","DNS","IP address","Switch","Latency","Firewall"],
["A request for data from a database","A device that connects devices in a LAN","A security system that filters network traffic","A system that processes online payments","A delay in network communication","A value that links records in related tables","A system that maps domain names to IP addresses","A collection of stored and organized information","A numerical network address","A place to hold selected products before checkout"],
["H","A","F","D","J","G","I","B","E","C"],
["database","query","foreign key","payment gateway","shopping cart","DNS","bandwidth","firewall","backup","latency"],
["A _____ stores information in an organized form.","A SQL _____ requests information from a database.","A _____ connects a record to a related table.","A _____ handles online payment processing.","Customers place chosen products in a _____.","_____ translates a domain name into an IP address.","Network _____ describes how much data can be transferred.","A _____ filters traffic according to security rules.","A _____ helps recover data after loss.","Network _____ is the delay before data arrives."],
{title:"Networks and Online Business",paragraphs:["Online businesses depend on databases and reliable networks. A database stores product details, customer information and orders. SQL queries allow applications to retrieve records and update stock levels.","Customers use a shopping cart and a payment gateway to complete an order. A secure website uses HTTPS to protect information sent between the browser and the server. Businesses should not store sensitive payment details carelessly.","A local network may use switches to connect devices. DNS translates domain names into IP addresses. Network administrators monitor bandwidth and latency, maintain firewalls and prepare backups to support reliable services."]},
[["Databases can store products, customers and orders.",true],["A payment gateway can help process an online payment.",true],["HTTPS is intended to expose private data.",false],["DNS maps domain names to IP addresses.",true],["Latency means the amount of permanent disk storage.",false]],
{title:"How an Online Order Works",paragraphs:["A customer visits an online shop and adds two products to a shopping cart. At checkout, the website sends the order details to its application server. The server uses a SQL query to read product prices and check stock in the database.","The payment gateway processes the payment. The website uses HTTPS to protect data while it travels between the customer's browser and the server. After payment is approved, the database is updated with the new order.","The store's network team monitors the connection. DNS helps customers reach the website by name, while switches connect computers inside the office network. Firewalls filter unwanted traffic and backups help the company recover important records."]},
[["Where does the customer put products before checkout?",["shopping cart"]],["What does the server check in the database?",["product prices","stock"]],["Which service processes the payment?",["payment gateway"]],["What protects data while it travels to the server?",["https"]],["Name one network security or recovery measure from the passage.",["firewall"]]]
),
makeExam(
[
["What should an IT support worker do when a user reports a problem?",["Listen and gather details","Blame the user","Ignore the request","Delete random files"],0],
["What is a support ticket?",["A record of a reported issue","A computer component","A web design language","A network cable"],0],
["Why is documentation useful in IT support?",["It records steps and solutions","It hides repeated problems","It replaces communication","It disables updates"],0],
["Which action can help prevent overheating?",["Keep air vents clear","Cover the fan","Block the air intake","Place the PC beside a heater"],0],
["What does an antivirus program help detect?",["Malicious software","Broken desk","Slow typing","Low screen brightness"],0],
["What is phishing?",["A deceptive attempt to steal information","A database backup","A network topology","A computer port"],0],
["Which password is strongest?",["T7!mQ9#vL2p","password","12345678","qwerty"],0],
["Why install security updates?",["To fix vulnerabilities and bugs","To delete all documents","To slow down the CPU","To remove the keyboard"],0],
["What is multi-factor authentication?",["Using more than one verification factor","Using one short password","Sharing an account","Turning off the firewall"],0],
["Which is an example of personal data?",["A customer's home address","A public HTML tag","A generic product category","A public IP standard"],0],
["What is a backup?",["A separate copy of data","A type of monitor","A network attack","A web browser"],0],
["Which device is used to connect a computer to a wired network?",["Network interface card","Speaker","Printer tray","Webcam lens"],0],
["What does a router do?",["Forwards packets between networks","Stores web page styles","Displays images","Runs SQL queries"],0],
["Which practice improves workplace ergonomics?",["Keep a comfortable posture and take breaks","Sit without moving all day","Look at a bright screen in darkness","Place the keyboard out of reach"],0],
["What should you do with an unexpected email attachment?",["Verify the sender before opening it","Open it immediately","Forward it to everyone","Disable antivirus"],0],
["What is a server?",["A computer or program that provides services to clients","A type of keyboard","A screen resolution","A database field only"],0],
["What does a browser cache store?",["Copies of resources to help pages load faster","All user passwords in plain text","Network cables","CPU instructions only"],0],
["What should support staff try before replacing a device?",["Basic checks and diagnosis","Delete the operating system","Ignore the symptoms","Share administrator passwords"],0],
["What is access control?",["Managing who can use a resource","Changing screen color","Increasing bandwidth","Formatting a website"],0],
["Why should confidential data be encrypted?",["To make it unreadable without the proper key","To make it public","To remove all backups","To increase screen size"],0]
],
["Phishing","Antivirus","Ticket","Encryption","MFA","Backup","Router","Ergonomics","Update","Access control"],
["A record used to track a support issue","A copy of data for recovery","A deceptive message designed to steal information","Converting data into a protected unreadable form","A tool that detects malicious software","A device that forwards packets between networks","A method using multiple verification factors","Managing permissions to use resources","A software change that fixes issues or vulnerabilities","Safe and comfortable design of a workplace"],
["C","E","A","D","G","B","F","J","I","H"],
["ticket","diagnosis","antivirus","phishing","encryption","update","permission","backup","ergonomics","router"],
["A support _____ records a user's reported problem.","A technician begins with a _____ to identify the cause.","_____ software helps detect malicious programs.","_____ emails may trick users into revealing passwords.","_____ makes information unreadable without the correct key.","A security _____ can fix known software vulnerabilities.","A user needs the correct _____ to access a protected file.","A _____ is a copy that can help restore lost data.","Good _____ helps reduce strain during computer work.","A _____ forwards data between different networks."],
{title:"IT Support and Cybersecurity",paragraphs:["IT support staff help employees use computers, applications and networks. When a problem is reported, they ask questions, perform basic checks and create a support ticket. Clear documentation helps other technicians understand what has already been tried.","Security is part of everyday IT work. Phishing messages may ask users to reveal passwords or open harmful attachments. Antivirus tools, software updates, encryption and multi-factor authentication can reduce risks.","Users should protect confidential information, use strong unique passwords and report suspicious activity. Good ergonomics is also important: take regular breaks, sit comfortably and keep the work area tidy."]},
[["IT support staff help users with technical problems.",true],["A support ticket can document a reported issue.",true],["Phishing messages are always safe to open.",false],["Multi-factor authentication adds a verification step.",true],["Ergonomics has no connection with computer use.",false]],
{title:"Responding to a Security Incident",paragraphs:["An employee receives an email that appears to come from the company's IT department. It asks the employee to click a link and enter a password. The employee notices unusual spelling and reports the message to the help desk instead of opening the link.","The support technician creates a ticket and informs the security team. The team checks the email, blocks the dangerous website and reminds staff about phishing. They also review account access and require multi-factor authentication for important systems.","The company installs security updates, checks antivirus alerts and keeps backups of important files. Employees are encouraged to use unique passwords and report suspicious messages quickly."]},
[["What did the suspicious email ask the employee to enter?",["password"]],["What did the employee do instead of clicking the link?",["reported the message"]],["What did the security team block?",["dangerous website","website"]],["What extra account protection did the company require?",["multi-factor authentication","mfa"]],["Name one other security measure mentioned.",["antivirus"]]]
)
];

const $ = id => document.getElementById(id);
const ABCD = ["A","B","C","D"];
let current = 0;
const letters = "ABCDEFGHIJ".split("");
function passageHTML(p){return '<article class="reading-passage"><h3>'+p.title+'</h3>'+p.paragraphs.map(x=>'<p>'+x+'</p>').join("")+'</article>';}
function render(){
  const e=exams[current];
  $("mcQuestions").innerHTML=e.mc.map((q,i)=>'<div class="question"><div class="question-title">'+(i+1)+'. '+q[0]+'</div><div class="options">'+q[1].map((v,j)=>'<label class="option"><input type="radio" name="mc'+i+'" value="'+j+'"><span><b>'+ABCD[j]+'.</b> '+v+'</span></label>').join("")+'</div></div>').join("");
  $("matchingTerms").innerHTML=e.terms.map(x=>'<li>'+x+'</li>').join("");
  $("matchingDefs").innerHTML=e.defs.map(x=>'<li>'+x+'</li>').join("");
  $("matchingInputs").innerHTML=e.terms.map((x,i)=>'<div class="match-row"><label for="match'+i+'">'+(i+1)+'. '+x+'</label><select id="match'+i+'"><option value="">Chọn</option>'+letters.map(a=>'<option>'+a+'</option>').join("")+'</select></div>').join("");
  $("wordBank").textContent="Word bank: "+e.words.join(" · ");
  $("fillQuestions").innerHTML=e.fills.map((s,i)=>'<div class="fill-row"><b>'+(i+1)+'.</b><div>'+s.replace("_____",'<select id="fill'+i+'"><option value="">Chọn từ</option>'+e.words.map(w=>'<option value="'+w+'">'+w+'</option>').join("")+'</select>')+'</div></div>').join("");
  $("tfPassage").innerHTML=passageHTML(e.tfPassage);
  $("tfQuestions").innerHTML=e.tf.map((q,i)=>'<div class="tf-row"><b>'+(i+1)+'. '+q[0]+'</b><div class="inline-options"><label><input type="radio" name="tf'+i+'" value="true"> True</label><label><input type="radio" name="tf'+i+'" value="false"> False</label></div></div>').join("");
  $("readingPassage").innerHTML=passageHTML(e.readingPassage);
  $("readingQuestions").innerHTML=e.reading.map((q,i)=>'<div class="question"><div class="question-title">'+(i+1)+'. '+q[0]+'</div><input class="answer-input" type="text" id="read'+i+'" placeholder="Write your answer in English"></div>').join("");
  $("result").classList.add("hidden");$("examForm").reset();answeredCount();window.scrollTo({top:0,behavior:"smooth"});
}
function answeredCount(){
  let n=0;for(let i=0;i<20;i++)if(document.querySelector('input[name="mc'+i+'"]:checked'))n++;
  for(let i=0;i<10;i++){if($("match"+i)?.value)n++;if($("fill"+i)?.value)n++;}
  for(let i=0;i<5;i++){if(document.querySelector('input[name="tf'+i+'"]:checked'))n++;if($("read"+i)?.value.trim())n++;}
  $("progressText").textContent=n+"/50";$("progressBar").style.width=(n/50*100)+"%";
}
function grade(){
  const e=exams[current];let score=0,review=[];
  e.mc.forEach((q,i)=>{const a=document.querySelector('input[name="mc'+i+'"]:checked'),ok=!!a&&+a.value===q[2];if(ok)score++;review.push('<div class="review-item">'+(i+1)+'. Trắc nghiệm — <span class="'+(ok?'correct':'incorrect')+'">'+(ok?'Đúng':'Sai')+'</span>. Đáp án: '+ABCD[q[2]]+'. '+q[1][q[2]]+'</div>');});
  e.terms.forEach((term,i)=>{const ok=$("match"+i).value===e.match[i];if(ok)score++;review.push('<div class="review-item">Nối '+(i+1)+' — <span class="'+(ok?'correct':'incorrect')+'">'+(ok?'Đúng':'Sai')+'</span>. Đáp án: '+e.match[i]+'.</div>');});
  e.words.forEach((word,i)=>{const ok=$("fill"+i).value===word;if(ok)score++;review.push('<div class="review-item">Điền từ '+(i+1)+' — <span class="'+(ok?'correct':'incorrect')+'">'+(ok?'Đúng':'Sai')+'</span>. Đáp án: '+word+'.</div>');});
  e.tf.forEach((q,i)=>{const a=document.querySelector('input[name="tf'+i+'"]:checked'),ok=!!a&&(a.value==="true")===q[1];if(ok)score++;review.push('<div class="review-item">True/False '+(i+1)+' — <span class="'+(ok?'correct':'incorrect')+'">'+(ok?'Đúng':'Sai')+'</span>. Đáp án: '+(q[1]?'True':'False')+'.</div>');});
  e.reading.forEach((q,i)=>{const answer=$("read"+i).value.toLowerCase(),matched=q[1].filter(k=>answer.includes(k)).length,ok=matched===q[1].length;if(ok)score++;review.push('<div class="review-item">Đọc hiểu '+(i+1)+' — <span class="'+(ok?'correct':'incorrect')+'">'+(ok?'Đủ từ khóa':'Chưa đủ từ khóa')+'</span>.<br><b>Đáp án tham khảo:</b> '+q[1].join("; ")+'.</div>');});
  $("score").textContent=score+"/50 ("+Math.round(score/50*100)+"%)";$("scoreMessage").textContent=score>=40?"Rất tốt!":score>=30?"Khá tốt. Hãy xem lại câu sai.":"Hãy ôn lại kiến thức và thử lại.";
  $("answerReview").innerHTML="<h3>Đáp án và nhận xét</h3>"+review.join("");$("result").classList.remove("hidden");$("result").scrollIntoView({behavior:"smooth"});
}
$("examSelect").addEventListener("change",e=>{current=Number(e.target.value);render();});
$("examForm").addEventListener("submit",e=>{e.preventDefault();grade();});
$("resetBtn").addEventListener("click",()=>{if(!confirm("Bạn có chắc muốn làm lại đề này?"))return;render();});
document.addEventListener("change",answeredCount);document.addEventListener("input",answeredCount);
render();

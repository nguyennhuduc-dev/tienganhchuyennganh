const mc = [
  ["A person who writes computer programs is called a _____.", ["designer","programmer","technician","manager"], 1],
  ["Which device is used to enter text into a computer?", ["Monitor","Printer","Keyboard","Speaker"], 2],
  ["CPU stands for _____.", ["Central Processing Unit","Computer Personal Unit","Control Program Utility","Central Power User"], 0],
  ["Which one is an operating system?", ["Google Chrome","Windows","Microsoft Word","HTML"], 1],
  ["A website is a collection of _____.", ["web pages","keyboards","databases only","processors"], 0],
  ["HTML is used to _____.", ["repair computers","create web pages","protect networks","store electricity"], 1],
  ["A database is used to _____.", ["store and organize data","print documents","browse websites","connect a mouse"], 0],
  ["SQL is commonly used to _____.", ["query databases","design keyboards","edit videos","send emails only"], 0],
  ["E-commerce means _____.", ["electronic commerce","computer repair","email communication","electric control"], 0],
  ["Which is an example of e-commerce?", ["Buying products online","Writing on paper","Installing RAM","Printing a file"], 0],
  ["A network connects _____.", ["computers and devices","only printers","only keyboards","computer screens"], 0],
  ["LAN stands for _____.", ["Local Area Network","Large Access Number","Long Area Node","Local Automatic Name"], 0],
  ["A router is used to _____.", ["direct network traffic","type documents","scan images","play music"], 0],
  ["IT support helps users solve _____.", ["technical problems","cooking problems","traffic problems","medical problems"], 0],
  ["A technician may _____ computer hardware.", ["repair","purchase only","translate","download only"], 0],
  ["A password should be _____.", ["easy to guess","strong and unique","shared with everyone","your name only"], 1],
  ["A firewall helps protect a _____.", ["network","keyboard","desk","monitor"], 0],
  ["Malware is _____.", ["malicious software","a web browser","a database","a printer"], 0],
  ["A backup is a copy of _____.", ["data","a keyboard","a monitor","a mouse"], 0],
  ["Which protocol is commonly used for secure websites?", ["HTTP","FTP","HTTPS","SMTP"], 2]
];

const matching = [
  ["CPU","Central Processing Unit"], ["Keyboard","Input device"], ["Database","Stores information"],
  ["Website","A collection of web pages"], ["Router","Directs network traffic"],
  ["Firewall","Protects a network"], ["Programmer","Writes computer code"],
  ["Malware","Malicious software"], ["Backup","A copy of data"], ["Browser","Accesses websites"]
];
const fillAnswers = ["keyboard","programmer","database","browser","network","router","password","website","malware","backup"];
const fillSentences = [
  "A _____ is used to type letters and numbers.",
  "A _____ is a person who writes computer programs.",
  "A _____ stores and organizes information.",
  "Google Chrome is a web _____.",
  "A _____ connects computers and other devices.",
  "A _____ directs data between networks.",
  "A strong _____ helps protect your account.",
  "A _____ is a collection of web pages.",
  "_____ is software designed to harm computers.",
  "A _____ is a copy of important data."
];
const tfQuestions = [
  ["A computer system consists of hardware and software.", true],
  ["A keyboard is a type of software.", false],
  ["The CPU is a hardware component.", true],
  ["Software tells the computer what to do.", true],
  ["The operating system manages computer resources.", true]
];
const readingQuestions = [
  ["What is a computer network?", "A group of computers and devices connected together to share information and resources."],
  ["What does LAN stand for?", "Local Area Network."],
  ["Where is LAN commonly used?", "In homes, schools and offices."],
  ["What does a router do?", "It forwards data between networks."],
  ["What does a firewall help protect against?", "Unauthorized access."]
];

const $ = id => document.getElementById(id);
const letters = ["A","B","C","D"];
const wordBank = ["password","browser","keyboard","database","network","programmer","website","malware","router","backup"];

function renderMC() {
  $("mcQuestions").innerHTML = mc.map((q,i) => `
    <div class="question">
      <div class="question-title">${i+1}. ${q[0]}</div>
      <div class="options">${q[1].map((opt,j)=>`
        <label class="option"><input type="radio" name="mc${i}" value="${j}">
          <span><b>${letters[j]}.</b> ${opt}</span></label>`).join("")}
      </div>
    </div>`).join("");
}
function renderMatching() {
  $("matchingTerms").innerHTML = matching.map(x=>`<li>${x[0]}</li>`).join("");
  $("matchingDefs").innerHTML = ["A. A collection of web pages","B. Protects a network","C. Central Processing Unit","D. Input device","E. Stores information","F. Directs network traffic","G. Writes computer code","H. Malicious software","I. A copy of data","J. Accesses websites"].map(x=>`<li>${x.slice(3)}</li>`).join("");
  $("matchingInputs").innerHTML = matching.map((x,i)=>`
    <div class="match-row"><label for="match${i}">${i+1}. ${x[0]}</label>
    <select id="match${i}" aria-label="Nối ${x[0]}"><option value="">Chọn</option>${letters.concat(["E","F","G","H","I","J"]).map(a=>`<option>${a}</option>`).join("")}</select></div>`).join("");
  // Correct mappings by matching item order to definition letter.
  window.matchCorrect = ["C","D","E","A","F","B","G","H","I","J"];
}
function renderFill() {
  $("wordBank").textContent = "Word bank: " + wordBank.join(" · ");
  $("fillQuestions").innerHTML = fillSentences.map((s,i)=>`
    <div class="fill-row"><b>${i+1}.</b><div>${s.replace("_____", `<select id="fill${i}" aria-label="Điền từ câu ${i+1}"><option value="">Chọn từ</option>${wordBank.map(w=>`<option value="${w}">${w}</option>`).join("")}</select>`)}</div></div>`).join("");
}
function renderTF() {
  $("tfQuestions").innerHTML = tfQuestions.map((q,i)=>`
    <div class="tf-row"><b>${i+1}. ${q[0]}</b><div class="inline-options">
      <label><input type="radio" name="tf${i}" value="true"> True</label>
      <label><input type="radio" name="tf${i}" value="false"> False</label>
    </div></div>`).join("");
}
function renderReading() {
  $("readingQuestions").innerHTML = readingQuestions.map((q,i)=>`
    <div class="question"><div class="question-title">${i+1}. ${q[0]}</div>
    <input class="answer-input" type="text" id="read${i}" placeholder="Write your answer in English"></div>`).join("");
}
function answeredCount() {
  let n = 0;
  mc.forEach((_,i)=>{ if(document.querySelector(`input[name="mc${i}"]:checked`)) n++; });
  matching.forEach((_,i)=>{ if($(`match${i}`).value) n++; });
  fillAnswers.forEach((_,i)=>{ if($(`fill${i}`).value) n++; });
  tfQuestions.forEach((_,i)=>{ if(document.querySelector(`input[name="tf${i}"]:checked`)) n++; });
  readingQuestions.forEach((_,i)=>{ if($(`read${i}`).value.trim()) n++; });
  $("progressText").textContent = `${n}/50`;
  $("progressBar").style.width = `${n/50*100}%`;
}
function normalize(s) { return s.toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim(); }
function grade() {
  let score = 0, total = 50, review = [];
  mc.forEach((q,i)=>{
    const chosen = document.querySelector(`input[name="mc${i}"]:checked`);
    const ok = chosen && Number(chosen.value) === q[2];
    if(ok) score++;
    review.push(`<div class="review-item">${i+1}. Multiple choice — <span class="${ok?'correct':'incorrect'}">${ok?'Đúng':'Sai'}</span>. Đáp án: ${letters[q[2]]}. ${q[1][q[2]]}</div>`);
  });
  matching.forEach((q,i)=>{
    const chosen = $(`match${i}`).value, ok = chosen === window.matchCorrect[i];
    if(ok) score++;
    review.push(`<div class="review-item">Nối ${i+1} — <span class="${ok?'correct':'incorrect'}">${ok?'Đúng':'Sai'}</span>. Đáp án: ${window.matchCorrect[i]}.</div>`);
  });
  fillAnswers.forEach((a,i)=>{
    const chosen = $(`fill${i}`).value, ok = chosen === a;
    if(ok) score++;
    review.push(`<div class="review-item">Điền từ ${i+1} — <span class="${ok?'correct':'incorrect'}">${ok?'Đúng':'Sai'}</span>. Đáp án: ${a}.</div>`);
  });
  tfQuestions.forEach((q,i)=>{
    const chosen = document.querySelector(`input[name="tf${i}"]:checked`);
    const ok = chosen && (chosen.value === "true") === q[1];
    if(ok) score++;
    review.push(`<div class="review-item">True/False ${i+1} — <span class="${ok?'correct':'incorrect'}">${ok?'Đúng':'Sai'}</span>. Đáp án: ${q[1]?'True':'False'}.</div>`);
  });
  readingQuestions.forEach((q,i)=>{
    const user = normalize($(`read${i}`).value);
    const key = normalize(q[1]);
    const keywords = [
      ["group","computers","devices","share","information","resources"],
      ["local","area","network"],
      ["homes","schools","offices"],
      ["forwards","data","networks"],
      ["unauthorized","access"]
    ][i];
    const ok = keywords.filter(k=>user.includes(k)).length >= (i===0?4:i===1?3:i===2?2:i===3?3:2);
    if(ok) score++;
    review.push(`<div class="review-item">Đọc hiểu ${i+1} — <span class="${ok?'correct':'incorrect'}">${ok?'Đạt từ khóa chính':'Cần xem lại'}</span>.<br><b>Đáp án tham khảo:</b> ${q[1]}<br><small>Phần đọc hiểu được chấm theo từ khóa, bạn có thể đối chiếu đáp án mẫu.</small></div>`);
  });
  $("score").textContent = `${score}/${total} (${Math.round(score/total*100)}%)`;
  $("scoreMessage").textContent = score >= 40 ? "Rất tốt! Bạn đã nắm khá vững kiến thức." : score >= 30 ? "Khá tốt. Hãy xem lại các câu sai." : "Bạn nên ôn lại từ vựng và nội dung các Unit rồi thử lại.";
  $("answerReview").innerHTML = `<h3>Đáp án và nhận xét</h3>${review.join("")}`;
  $("result").classList.remove("hidden");
  $("result").scrollIntoView({behavior:"smooth"});
}
renderMC(); renderMatching(); renderFill(); renderTF(); renderReading();
document.addEventListener("change", answeredCount);
document.addEventListener("input", answeredCount);
$("examForm").addEventListener("submit", e=>{ e.preventDefault(); grade(); });
$("resetBtn").addEventListener("click", ()=>{
  if(!confirm("Bạn có chắc muốn xóa toàn bộ câu trả lời và làm lại?")) return;
  $("examForm").reset(); $("result").classList.add("hidden"); answeredCount();
  window.scrollTo({top:0,behavior:"smooth"});
});
answeredCount();

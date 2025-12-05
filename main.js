function scrollToId(idName) {
    const el = document.getElementById(idName);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
const modal = document.createElement("div");
modal.id = "projectModal";
modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 200;
`;
document.body.appendChild(modal);
modal.innerHTML = `
    <div id="modalBox" style="
        background: #fff;
        max-width: 600px;
        width: 100%;
        border-radius: 10px;
        padding: 20px 24px;
        line-height: 1.45;
        position: relative;
        max-height: 85vh;
        overflow-y: auto;
    ">
        <button id="closeModal" style="
            position:absolute; 
            top:10px; 
            right:12px; 
            background:none; 
            border:0; 
            font-size:18px; 
            font-weight:bold;
            cursor:pointer;
        ">×</button>

        <h2 id="modalTitle" style="margin-bottom:8px;">Project Title</h2>
        <p id="modalText" style="white-space:pre-line; color:#444;"></p>
    </div>
`;

const PROJECTS = {
  1: {
    title: "Library Management System (Java)",
    text: "A simple Library Management System built in Java (OOP) with a Swing-based GUI.\n\nFeatures:\n- Add new books\n- Remove books\n- Search books by title\n- Borrow & return (availability toggle)\n- Display full list of books\n\nImplementation details:\nLibrary.java uses an ArrayList<Book> for storing book objects.\nBook.java defines the model: title, author, availability.\nLibraryGUI.java builds the desktop UI using Swing components (buttons, fields, text area) to interact with the library.\n\nRun locally:\n1) javac Book.java Library.java LibraryGUI.java\n2) java com.hero.LibraryGUI\n\n(Thumbnail: place p1.jpg in /assets.)"
  },

  2: {
    title: "Password Manager (Python)",
    text: "A GUI-based Password Manager application built in Python using Tkinter.\n\nFeatures:\n- Generate secure random passwords\n- Strength modes: Low, Medium, Strong\n- Copy password to clipboard\n- Save credentials (username, website, password) into info.txt\n- Persistent storage with automatic file creation\n- View saved passwords using console output\n\nImplementation:\nUses tkinter widgets (Entry, Labels, Buttons, Combobox, Radiobuttons) and pyperclip for clipboard operations.\nPassword generation logic uses random.choice across multiple character sets.\n\nRun locally:\npython Password_manager.py\n\n(Thumbnail: place p2.jpg inside /assets.)"
  }
};


function openProject(id) {
    const p = PROJECTS[id];
    if (!p) return;

    document.getElementById("modalTitle").innerText = p.title;
    document.getElementById("modalText").innerText = p.text;

    modal.style.display = "flex";
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-btn");
    if (btn) {
        const id = btn.dataset.project;
        openProject(id);
    }
});
modal.addEventListener("click", (e) => {
    const isCloseBtn = e.target.id === "closeModal";
    const isBackdrop = e.target.id === "projectModal";

    if (isCloseBtn || isBackdrop) {
        modal.style.display = "none";
    }
});


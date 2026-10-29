const inscriptions = [
    { id: 1, numeroDossier: "DOS-2026-001", nom: "Adam", prenom: "El Amrani", matiere: "Arabe", niveau: "1e année primaire", centre: "Nador Centre", prix: 200, statut: "En attente", dateInscription: "2026-10-01", markDelete: false, markToUpdate: false },
    { id: 2, numeroDossier: "DOS-2026-002", nom: "Lina", prenom: "Bennis", matiere: "Français", niveau: "2e année primaire", centre: "Nador Centre", prix: 200, statut: "Payée", dateInscription: "2026-10-02", markDelete: false, markToUpdate: false },
    { id: 3, numeroDossier: "DOS-2026-003", nom: "Yassine", prenom: "Alaoui", matiere: "Mathématiques", niveau: "3e année primaire", centre: "Hay Al Matar", prix: 200, statut: "Validée", dateInscription: "2026-10-03", markDelete: false, markToUpdate: false },
    { id: 4, numeroDossier: "DOS-2026-004", nom: "Salma", prenom: "Idrissi", matiere: "Activité scientifique", niveau: "4e année primaire", centre: "Nador Centre", prix: 220, statut: "Payée", dateInscription: "2026-10-04", markDelete: false, markToUpdate: false },
    { id: 5, numeroDossier: "DOS-2026-005", nom: "Omar", prenom: "Chraibi", matiere: "Arabe", niveau: "5e année primaire", centre: "Selouane", prix: 220, statut: "En attente", dateInscription: "2026-10-05", markDelete: false, markToUpdate: false },
    { id: 6, numeroDossier: "DOS-2026-006", nom: "Aya", prenom: "Bennani", matiere: "Mathématiques", niveau: "6e année primaire", centre: "Nador Centre", prix: 250, statut: "Validée", dateInscription: "2026-10-06", markDelete: false, markToUpdate: false },
    { id: 7, numeroDossier: "DOS-2026-007", nom: "Hamza", prenom: "Tazi", matiere: "Français", niveau: "1e année collège", centre: "Nador Centre", prix: 250, statut: "Payée", dateInscription: "2026-10-07", markDelete: false, markToUpdate: false },
    { id: 8, numeroDossier: "DOS-2026-008", nom: "Nour", prenom: "El Fassi", matiere: "Mathématiques", niveau: "1e année collège", centre: "Nador Centre", prix: 300, statut: "En attente", dateInscription: "2026-10-08", markDelete: false, markToUpdate: false },
    { id: 9, numeroDossier: "DOS-2026-009", nom: "Mehdi", prenom: "Lahlou", matiere: "Anglais", niveau: "2e année collège", centre: "Hay Al Matar", prix: 250, statut: "Payée", dateInscription: "2026-10-09", markDelete: false, markToUpdate: false },
    { id: 10, numeroDossier: "DOS-2026-010", nom: "Sara", prenom: "Amrani", matiere: "Physique-Chimie", niveau: "2e année collège", centre: "Hay Al Matar", prix: 250, statut: "Validée", dateInscription: "2026-10-10", markDelete: false, markToUpdate: false },
    { id: 11, numeroDossier: "DOS-2026-011", nom: "Ilyas", prenom: "Mansouri", matiere: "Mathématiques", niveau: "3e année collège", centre: "Nador Centre", prix: 300, statut: "Payée", dateInscription: "2026-10-11", markDelete: false, markToUpdate: false },
    { id: 12, numeroDossier: "DOS-2026-012", nom: "Mariam", prenom: "Zahraoui", matiere: "Informatique", niveau: "3e année collège", centre: "Nador Centre", prix: 250, statut: "En attente", dateInscription: "2026-10-12", markDelete: false, markToUpdate: false },
    { id: 13, numeroDossier: "DOS-2026-013", nom: "Anas", prenom: "Benjelloun", matiere: "Mathématiques", niveau: "1e année lycee", centre: "Nador Centre", prix: 350, statut: "Payée", dateInscription: "2026-10-13", markDelete: false, markToUpdate: false },
    { id: 14, numeroDossier: "DOS-2026-014", nom: "Hiba", prenom: "Ouazzani", matiere: "Français", niveau: "1e année lycee", centre: "Nador Centre", prix: 300, statut: "Validée", dateInscription: "2026-10-14", markDelete: false, markToUpdate: false },
    { id: 15, numeroDossier: "DOS-2026-015", nom: "Rayan", prenom: "Saidi", matiere: "Physique-Chimie", niveau: "1e année lycee", centre: "Nador Centre", prix: 350, statut: "En attente", dateInscription: "2026-10-15", markDelete: false, markToUpdate: false },
    { id: 16, numeroDossier: "DOS-2026-016", nom: "Imane", prenom: "Tahiri", matiere: "Mathématiques", niveau: "1e année bac", centre: "Selouane", prix: 400, statut: "Payée", dateInscription: "2026-10-18", markDelete: false, markToUpdate: false },
    { id: 17, numeroDossier: "DOS-2026-017", nom: "Zakaria", prenom: "Fikri", matiere: "Français", niveau: "1e année bac", centre: "Selouane", prix: 350, statut: "Validée", dateInscription: "2026-10-20", markDelete: false, markToUpdate: false },
    { id: 18, numeroDossier: "DOS-2026-018", nom: "Ghita", prenom: "Bennouna", matiere: "Philosophie", niveau: "2e année bac", centre: "Nador Centre", prix: 350, statut: "En attente", dateInscription: "2026-10-22", markDelete: false, markToUpdate: false },
    { id: 19, numeroDossier: "DOS-2026-019", nom: "Ayoub", prenom: "Kadiri", matiere: "Mathématiques", niveau: "2e année bac", centre: "Nador Centre", prix: 450, statut: "Payée", dateInscription: "2026-10-25", markDelete: false, markToUpdate: false },
    { id: 20, numeroDossier: "DOS-2026-020", nom: "Kenza", prenom: "Berrada", matiere: "Anglais", niveau: "2e année bac", centre: "Hay Al Matar", prix: 400, statut: "Validée", dateInscription: "2026-10-28", markDelete: false, markToUpdate: false }
];
function stedentsTolocaltorege() {


   if(localStorage.getItem("eleve") == undefined) {
     localStorage.setItem("eleve",JSON.stringify(inscriptions))
   }
   
    
    
}

const studentsList = document.getElementById("students-list");
const box = document.getElementById("studentsTotal")
function getstedents() {
  const student=  JSON.parse(localStorage.getItem("eleve"))
  return student
    
}
 function formatstedents(listdatastudent) {
     return listdatastudent.map((stdent)=>{

    
    return `<div  id="${stdent.id}" class="students flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 mb-3 shadow-sm text-sm text-slate-700">

    <span><strong class="text-blue-900">Dossier :</strong> ${stdent.numeroDossier}</span>
    <span><strong class="text-blue-900">Nom :</strong> ${stdent.nom}</span>
    <span><strong class="text-blue-900">Prénom :</strong> ${stdent.prenom}</span>
    <span><strong class="text-blue-900">Matière :</strong> ${stdent.matiere}</span>
    <span><strong class="text-blue-900">Niveau :</strong> ${stdent.niveau}</span>
    <span><strong class="text-blue-900">Centre :</strong> ${stdent.centre}</span>
    <span>
    <strong class="text-blue-900">Date d'inscription :</strong>
    ${stdent.dateInscription}</span>
    <span><strong class="text-blue-900">Prix :</strong> ${stdent.prix} MAD</span>

    <span class="rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-medium">
        ${stdent.statut}
    </span>

    <div class="flex items-center gap-2 ml-auto">
        <button
            class="btn-update rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 transition"
            >
            Modifier
        </button>

        <button
            class="btn-delete rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600 transition">
            Supprimer
        </button>
    </div>

</div>` })}
 


    


function showstudent(addstedents) {
    studentsList.innerHTML = ""
    for (let i = 0; i < addstedents.length; i++) {
        studentsList.innerHTML+=addstedents[i]

        
    }
    
}

stedentsTolocaltorege()

showstudent(formatstedents(getstedents()))
function markstudentsid() {
studentsList.addEventListener("click",(event)=>{
    const btn = event.target;
    
const btndelete = btn.closest(".btn-delete");
if (btndelete!=null) {
    

const studentkk=btndelete.closest(".students")
const ID =studentkk.id
console.log(ID);

const studentsese =getstedents()
let studentsNotdeleted = []
for (let i = 0; i < studentsese.length; i++) {
    if (studentsese[i].id==ID) {
        studentsese[i].markDelete=true
        continue

    }
    studentsNotdeleted.push(studentsese[i])
    
}
 
window.localStorage.setItem("eleve", JSON.stringify(studentsNotdeleted))
showstudent(formatstedents(getstedents()))
}

})

    
}










const eleveNom = document.getElementById("eleve-nom");
const elevePrenom = document.getElementById("eleve-prenom");
const eleveNiveau = document.getElementById("eleve-niveau");

const inscriptionMatiere = document.getElementById("inscription-matiere");
const inscriptionCentre = document.getElementById("inscription-centre");
const inscriptionStatut = document.getElementById("inscription-statut");

const cancelEdit = document.getElementById("cancel-edit");
const cancelEditBottom = document.getElementById("cancel-edit-bottom");
const studentEditForm = document.getElementById("student-edit-form");
const editForm = document.getElementById("edit-form");




let studentIdToUpdate = null;

function update() {
    studentsList.addEventListener("click", (event) => {
        const btn = event.target;
        const btnUpdate = btn.closest(".btn-update");

        if (btnUpdate !== null) {
            const studentCard = btnUpdate.closest(".students");
            const ID = studentCard.id;

            const studentsese = getstedents();

            for (let i = 0; i < studentsese.length; i++) {
                if (studentsese[i].id == ID) {
                    studentIdToUpdate = studentsese[i].id;

                    editForm.classList.remove("hidden");

                    eleveNom.value = studentsese[i].nom;
                    elevePrenom.value = studentsese[i].prenom;
                    eleveNiveau.value = studentsese[i].niveau;
                    inscriptionMatiere.value = studentsese[i].matiere;
                    inscriptionStatut.value = studentsese[i].statut;
                    inscriptionCentre.value = studentsese[i].centre;
                }
            }
        }
    });

    editForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const studentsese = getstedents();

        for (let i = 0; i < studentsese.length; i++) {
            if (studentsese[i].id == studentIdToUpdate) {
                studentsese[i].nom = eleveNom.value;
                studentsese[i].prenom = elevePrenom.value;
                studentsese[i].niveau = eleveNiveau.value;
                studentsese[i].matiere = inscriptionMatiere.value;
                studentsese[i].statut = inscriptionStatut.value;
                studentsese[i].centre = inscriptionCentre.value;

                studentsese[i].markToUpdate = false;
            }
        }

        localStorage.setItem("eleve", JSON.stringify(studentsese));

        editForm.classList.add("hidden");

        showstudent(formatstedents(getstedents()));
    });
}

markstudentsid()
update()
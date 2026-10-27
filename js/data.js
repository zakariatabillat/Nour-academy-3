const courses = [
    { id: 1, matiere: "Arabe", niveau: "1e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h", prix: 200, icon: "fa-book" },
    { id: 2, matiere: "Français", niveau: "1e année primaire", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h", prix: 200, icon: "fa-book-open" },
    { id: 3, matiere: "Mathématiques", niveau: "1e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 17h–18h", prix: 200, icon: "fa-calculator" },
    { id: 4, matiere: "Éducation islamique", niveau: "1e année primaire", centre: "Nador Centre", horaire: "Sam. · 10h–11h", prix: 200, icon: "fa-book" },

    { id: 5, matiere: "Arabe", niveau: "2e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h", prix: 200, icon: "fa-book" },
    { id: 6, matiere: "Français", niveau: "2e année primaire", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h", prix: 200, icon: "fa-book-open" },
    { id: 7, matiere: "Mathématiques", niveau: "2e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 17h–18h", prix: 200, icon: "fa-calculator" },
    { id: 8, matiere: "Éducation islamique", niveau: "2e année primaire", centre: "Nador Centre", horaire: "Sam. · 10h–11h", prix: 200, icon: "fa-book" },

    { id: 9, matiere: "Arabe", niveau: "3e année primaire", centre: "Hay Al Matar", horaire: "Lun. et mer. · 16h–17h", prix: 200, icon: "fa-book" },
    { id: 10, matiere: "Français", niveau: "3e année primaire", centre: "Hay Al Matar", horaire: "Mar. et jeu. · 16h–17h", prix: 200, icon: "fa-book-open" },
    { id: 11, matiere: "Mathématiques", niveau: "3e année primaire", centre: "Hay Al Matar", horaire: "Lun. et mer. · 17h–18h", prix: 200, icon: "fa-calculator" },
    { id: 12, matiere: "Activité scientifique", niveau: "3e année primaire", centre: "Hay Al Matar", horaire: "Sam. · 10h–11h", prix: 200, icon: "fa-flask" },

    { id: 13, matiere: "Arabe", niveau: "4e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h", prix: 220, icon: "fa-book" },
    { id: 14, matiere: "Français", niveau: "4e année primaire", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h", prix: 220, icon: "fa-book-open" },
    { id: 15, matiere: "Mathématiques", niveau: "4e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 17h–18h", prix: 220, icon: "fa-calculator" },
    { id: 16, matiere: "Activité scientifique", niveau: "4e année primaire", centre: "Nador Centre", horaire: "Sam. · 10h–11h", prix: 220, icon: "fa-flask" },

    { id: 17, matiere: "Arabe", niveau: "5e année primaire", centre: "Selouane", horaire: "Lun. et mer. · 16h–17h", prix: 220, icon: "fa-book" },
    { id: 18, matiere: "Français", niveau: "5e année primaire", centre: "Selouane", horaire: "Mar. et jeu. · 16h–17h", prix: 220, icon: "fa-book-open" },
    { id: 19, matiere: "Mathématiques", niveau: "5e année primaire", centre: "Selouane", horaire: "Lun. et mer. · 17h–18h", prix: 220, icon: "fa-calculator" },
    { id: 20, matiere: "Activité scientifique", niveau: "5e année primaire", centre: "Selouane", horaire: "Sam. · 10h–11h", prix: 220, icon: "fa-flask" },

    { id: 21, matiere: "Arabe", niveau: "6e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h", prix: 250, icon: "fa-book" },
    { id: 22, matiere: "Français", niveau: "6e année primaire", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h", prix: 250, icon: "fa-book-open" },
    { id: 23, matiere: "Mathématiques", niveau: "6e année primaire", centre: "Nador Centre", horaire: "Lun. et mer. · 17h–18h", prix: 250, icon: "fa-calculator" },
    { id: 24, matiere: "Activité scientifique", niveau: "6e année primaire", centre: "Nador Centre", horaire: "Sam. · 10h–11h", prix: 250, icon: "fa-flask" },

    { id: 25, matiere: "Arabe", niveau: "1e année collège", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h30", prix: 250, icon: "fa-book" },
    { id: 26, matiere: "Français", niveau: "1e année collège", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h30", prix: 250, icon: "fa-book-open" },
    { id: 27, matiere: "Anglais", niveau: "1e année collège", centre: "Nador Centre", horaire: "Sam. · 11h–12h30", prix: 250, icon: "fa-language" },
    { id: 28, matiere: "Mathématiques", niveau: "1e année collège", centre: "Nador Centre", horaire: "Mar. et jeu. · 18h–19h30", prix: 300, icon: "fa-calculator" },
    { id: 29, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "1e année collège", centre: "Nador Centre", horaire: "Lun. · 18h–19h30", prix: 250, icon: "fa-leaf" },
    { id: 30, matiere: "Physique-Chimie", niveau: "1e année collège", centre: "Nador Centre", horaire: "Mer. · 18h–19h30", prix: 250, icon: "fa-flask" },
    { id: 31, matiere: "Histoire-Géographie", niveau: "1e année collège", centre: "Nador Centre", horaire: "Sam. · 14h–15h30", prix: 250, icon: "fa-earth-africa" },
    { id: 32, matiere: "Éducation islamique", niveau: "1e année collège", centre: "Nador Centre", horaire: "Sam. · 15h30–17h", prix: 250, icon: "fa-book" },

    { id: 33, matiere: "Arabe", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Lun. et mer. · 16h–17h30", prix: 250, icon: "fa-book" },
    { id: 34, matiere: "Français", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Mar. et jeu. · 16h–17h30", prix: 250, icon: "fa-book-open" },
    { id: 35, matiere: "Anglais", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Sam. · 11h–12h30", prix: 250, icon: "fa-language" },
    { id: 36, matiere: "Mathématiques", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Mar. et jeu. · 18h–19h30", prix: 300, icon: "fa-calculator" },
    { id: 37, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Lun. · 18h–19h30", prix: 250, icon: "fa-leaf" },
    { id: 38, matiere: "Physique-Chimie", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Mer. · 18h–19h30", prix: 250, icon: "fa-flask" },
    { id: 39, matiere: "Histoire-Géographie", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Sam. · 14h–15h30", prix: 250, icon: "fa-earth-africa" },
    { id: 40, matiere: "Éducation islamique", niveau: "2e année collège", centre: "Hay Al Matar", horaire: "Sam. · 15h30–17h", prix: 250, icon: "fa-book" },

    { id: 41, matiere: "Arabe", niveau: "3e année collège", centre: "Nador Centre", horaire: "Lun. et mer. · 16h–17h30", prix: 300, icon: "fa-book" },
    { id: 42, matiere: "Français", niveau: "3e année collège", centre: "Nador Centre", horaire: "Mar. et jeu. · 16h–17h30", prix: 300, icon: "fa-book-open" },
    { id: 43, matiere: "Anglais", niveau: "3e année collège", centre: "Nador Centre", horaire: "Sam. · 11h–12h30", prix: 300, icon: "fa-language" },
    { id: 44, matiere: "Mathématiques", niveau: "3e année collège", centre: "Nador Centre", horaire: "Mar. et jeu. · 18h–19h30", prix: 300, icon: "fa-calculator" },
    { id: 45, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "3e année collège", centre: "Nador Centre", horaire: "Lun. · 18h–19h30", prix: 300, icon: "fa-leaf" },
    { id: 46, matiere: "Physique-Chimie", niveau: "3e année collège", centre: "Nador Centre", horaire: "Mer. · 18h–19h30", prix: 300, icon: "fa-flask" },
    { id: 47, matiere: "Histoire-Géographie", niveau: "3e année collège", centre: "Nador Centre", horaire: "Sam. · 14h–15h30", prix: 300, icon: "fa-earth-africa" },
    { id: 48, matiere: "Éducation islamique", niveau: "3e année collège", centre: "Nador Centre", horaire: "Sam. · 15h30–17h", prix: 300, icon: "fa-book" },

    { id: 49, matiere: "Arabe", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Lun. · 16h–17h30", prix: 300, icon: "fa-book" },
    { id: 50, matiere: "Français", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Mar. · 16h–17h30", prix: 300, icon: "fa-book-open" },
    { id: 51, matiere: "Anglais", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Mer. · 16h–17h30", prix: 300, icon: "fa-language" },
    { id: 52, matiere: "Mathématiques", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Mar. et jeu. · 18h–19h30", prix: 350, icon: "fa-calculator" },
    { id: 53, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Jeu. · 16h–17h30", prix: 300, icon: "fa-leaf" },
    { id: 54, matiere: "Physique-Chimie", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Lun. et mer. · 18h–19h30", prix: 350, icon: "fa-flask" },
    { id: 55, matiere: "Histoire-Géographie", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Sam. · 14h–15h30", prix: 300, icon: "fa-earth-africa" },
    { id: 56, matiere: "Éducation islamique", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Sam. · 15h30–17h", prix: 300, icon: "fa-book" },

    { id: 57, matiere: "Arabe", niveau: "1e année bac", centre: "Selouane", horaire: "Lun. · 16h–17h30", prix: 350, icon: "fa-book" },
    { id: 58, matiere: "Français", niveau: "1e année bac", centre: "Selouane", horaire: "Mar. · 16h–17h30", prix: 350, icon: "fa-book-open" },
    { id: 59, matiere: "Anglais", niveau: "1e année bac", centre: "Selouane", horaire: "Mer. · 16h–17h30", prix: 350, icon: "fa-language" },
    { id: 60, matiere: "Mathématiques", niveau: "1e année bac", centre: "Selouane", horaire: "Mar. et jeu. · 18h–19h30", prix: 400, icon: "fa-calculator" },
    { id: 61, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "1e année bac", centre: "Selouane", horaire: "Jeu. · 16h–17h30", prix: 350, icon: "fa-leaf" },
    { id: 62, matiere: "Physique-Chimie", niveau: "1e année bac", centre: "Selouane", horaire: "Lun. et mer. · 18h–19h30", prix: 400, icon: "fa-flask" },
    { id: 63, matiere: "Histoire-Géographie", niveau: "1e année bac", centre: "Selouane", horaire: "Sam. · 14h–15h30", prix: 350, icon: "fa-earth-africa" },
    { id: 64, matiere: "Éducation islamique", niveau: "1e année bac", centre: "Selouane", horaire: "Sam. · 15h30–17h", prix: 350, icon: "fa-book" },

    { id: 65, matiere: "Arabe", niveau: "2e année bac", centre: "Nador Centre", horaire: "Lun. · 16h–17h30", prix: 400, icon: "fa-book" },
    { id: 66, matiere: "Français", niveau: "2e année bac", centre: "Nador Centre", horaire: "Mar. · 16h–17h30", prix: 400, icon: "fa-book-open" },
    { id: 67, matiere: "Anglais", niveau: "2e année bac", centre: "Nador Centre", horaire: "Mer. · 16h–17h30", prix: 400, icon: "fa-language" },
    { id: 68, matiere: "Mathématiques", niveau: "2e année bac", centre: "Nador Centre", horaire: "Mar. et jeu. · 18h–19h30", prix: 450, icon: "fa-calculator" },
    { id: 69, matiere: "Sciences de la Vie et de la Terre (SVT)", niveau: "2e année bac", centre: "Nador Centre", horaire: "Jeu. · 16h–17h30", prix: 400, icon: "fa-leaf" },
    { id: 70, matiere: "Physique-Chimie", niveau: "2e année bac", centre: "Nador Centre", horaire: "Lun. et mer. · 18h–19h30", prix: 450, icon: "fa-flask" },
    { id: 71, matiere: "Histoire-Géographie", niveau: "2e année bac", centre: "Nador Centre", horaire: "Sam. · 14h–15h30", prix: 400, icon: "fa-earth-africa" },
    { id: 72, matiere: "Philosophie", niveau: "2e année bac", centre: "Nador Centre", horaire: "Sam. · 15h30–17h", prix: 350, icon: "fa-brain" },
    { id: 73, matiere: "Éducation islamique", niveau: "2e année bac", centre: "Nador Centre", horaire: "Sam. · 17h–18h30", prix: 350, icon: "fa-book" },

    { id: 74, matiere: "Informatique", niveau: "3e année collège", centre: "Nador Centre", horaire: "Sam. · 10h–11h30", prix: 250, icon: "fa-laptop-code" },
    { id: 75, matiere: "Informatique", niveau: "1e année lycee", centre: "Nador Centre", horaire: "Sam. · 11h30–13h", prix: 300, icon: "fa-laptop-code" },
    { id: 76, matiere: "Informatique", niveau: "1e année bac", centre: "Nador Centre", horaire: "Sam. · 14h–15h30", prix: 350, icon: "fa-laptop-code" },
];


const Cours = document.querySelector("#cart-cours")
const nev = document.getElementById("Niveau")
const matiere = document.getElementById("Matière")
const center = document.getElementById("Centre")
const itemsss = document.getElementById("items")
const totalfactur = document.getElementById("facture")



function listenData() {

    matiere.addEventListener("change", () => {

        FilterData()




    })

    nev.addEventListener("change", () => {

        FilterData()



    })

    center.addEventListener("change", () => {


        FilterData()


    })
}


function FilterData() {
    const filter = courses.filter((checkker) => {
        return (checkker.centre === center.value || center.value === "") &&
            (checkker.matiere === matiere.value || matiere.value === "") &&
            (checkker.niveau === nev.value || nev.value === "")
    })

    renderCourses(filter)
}

function renderCourses(copycousrs = courses) {
    Cours.innerHTML = ""
    const showInHtml = copycousrs.map((project) => {
        return `
        

        
       <div class="h-[420px]  border-black border-[2px] w-[90%] lg:w-80 mt-5  rounded-[16px] ml-3   ">

                <h3 class="mt-3 ml-8 text-2xl font-bold ">${project.matiere}</h3>
                <p class="mt-3 ml-10">${project.niveau}</p>
                <div class="flex gap-2">
                    <i class="fa-solid fa-location-dot fa-sm mt-5 ml-10" style="color: rgb(116, 192, 252);"></i>
                    <p class="mt-3">${project.centre}</p>
                </div>
                <div class="flex gap-2">
                    <i class="fa-regular fa-clock fa-sm mt-5 ml-10" style="color: rgb(116, 192, 252);"></i>
                    <p class="mt-3">${project.horaire}</p>
                </div>
                <hr class="w-[100%] mt-7 ">
                <p class="text-2xl font-bold mt-5 ml-3 text-[#1E293B]">${project.prix} MAD </p>

                <p class="text-[#1E293B] ml-3">par mois</p>
                <button class="mt-8 ml-4 bg-[#2563EB] w-[90%] h-20 text-center text-[20px] rounded-2xl"
                    type="button"    onclick="addToPanier(${project.id},this)"  >Ajouter à ma sélection <span class="ml-2 text-2xl text-white">+</span></button>

            </div>
    `
    })

    Cours.innerHTML = showInHtml
}
let arr = []


function addToPanier(id, ele) {
    arr.push(id)
    localStorage.setItem("user-cart", JSON.stringify(arr))
    let items = (JSON.parse(localStorage.getItem("user-cart")));
    localStorage.setItem("cart-shoping", items.length)

    document.getElementById("cart-shoping").innerHTML = items.length
    ele.style.backgroundColor = "#9CA3AF";
    ele.disabled = true;
}
let data = courses

function getcartitems() {
    let chose = []
    let items = (JSON.parse(localStorage.getItem("user-cart")));
    for (let i = 0; i < items.length; i++) {
        chose.push(data.find((data) => data.id == items[i]))




    }
    carculTotal(chose)

    addcartTopagecart(chose)


}
let total = 0

function carculTotal(items) {
    for (let i = 0; i < items.length; i++) {
        total += items[i].prix

        totalfactur.innerHTML = total
    }
    totalfactur.innerHTML = "Payez maintenant : " + total

}

function totalAfterdelet(items) {
    if (condition) {

    }
    for (let i = 0; i < items.length; i++) {
        total += items[i].prix

        totalfactur.innerHTML = total
    }
    totalfactur.innerHTML = "Payez maintenant : " + total

}

function removeitems(id) {
    let total = 0
    let chose = []
    let items = (JSON.parse(localStorage.getItem("user-cart")));
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (items[i] == data[j].id) {
                if (items[i] != id) {
                    chose.push(data[j])
                    total += data[j].prix

                }



            }




        }



    }
    localStorage.setItem("user-cart", JSON.stringify(items.filter((item) => item != id)));

    addcartTopagecart(chose)
    totalfactur.innerHTML = "Payez maintenant : " + total



}



function addcartTopagecart(items) {

    itemsss.innerHTML = ""
    const showInHtml = items.map((project) => {
            return `
        .
       <div class="h-[450px]  border-black border-[2px] w-[80%] lg:w-[20%] mt-5 lg:ml-4   rounded-[16px]  ">

                <h3 class="mt-3 ml-8 text-2xl font-bold lg:w-[80%] lg:h-[20%]">${project.matiere}</h3>
                <p class="mt-3 ml-10">${project.niveau}</p>
                <div class="flex gap-2">
                    <i class="fa-solid fa-location-dot fa-sm mt-5 ml-10" style="color: rgb(116, 192, 252);"></i>
                    <p class="mt-3">${project.centre}</p>
                </div>
                <div class="flex gap-2">
                    <i class="fa-regular fa-clock fa-sm mt-5 ml-10" style="color: rgb(116, 192, 252);"></i>
                    <p class="mt-3">${project.horaire}</p>
                </div>
                <hr class="w-[100%] mt-7 ">
                <p class="text-2xl font-bold mt-5 ml-3 text-[#1E293B]">${project.prix}  MAD </p>

                <p class="text-[#1E293B] ml-3">par mois</p>
                  <button class="mt-8 ml-4 bg-[#FF0000] w-[90%] h-20 text-center text-[20px] rounded-2xl"
                    type="button"  onclick="removeitems(${project.id})"   >supprimé à ma sélection </button>

                
             
            </div>
            
    `

        }


    )


    itemsss.innerHTML = showInHtml
}
renderCourses();
listenData();
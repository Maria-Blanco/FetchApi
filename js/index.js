let tagTBody = document.querySelector("#clubPlans tbody");
let info = document.querySelector("main");

fetch ('https://my-json-server.typicode.com/Maria-Blanco/FakeApiSport/planes',
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

    let listPlans = data;
    //console.log(data)

    listPlans.forEach(element => {
        let contFila = document.createElement("tr");
        let contCode = document.createElement("td");
        let contName = document.createElement("td");
        let contLenght = document.createElement("td");
        let contYear = document.createElement("td");
        //let linkModal = document.createElement("a");

        contCode.innerHTML = element.codigo;
        contName.innerHTML = element.name;
        contLenght.innerHTML = element.plazo;
        contYear.innerHTML = element.anual;

        tagTBody.appendChild(contFila);
        contFila.appendChild(contCode);
        contFila.appendChild(contName);
        contFila.appendChild(contLenght);
        contFila.appendChild(contYear);


        //LINK MODAL
        contFila.setAttribute("data-toggle", "modal");
        contFila.setAttribute("data-target", "#" + element.codigo);

        //MODAL
        let modalcontainer = document.createElement("div");
        modalcontainer.setAttribute("class", "modal fade");
        modalcontainer.setAttribute("id", element.codigo);
        modalcontainer.setAttribute("role", "dialog");
        let modaldia = document.createElement("div");
        modaldia.setAttribute("class", "modal-dialog");

        //MODAL CONTENT
        let modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        let modalHead = document.createElement("div");
        modalHead.setAttribute("class", "modal-header");
        let closeButton = document.createElement("button");
        closeButton.setAttribute("class", "close");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("data-dismiss", "modal");
        let modalTitle = document.createElement("h3");
        modalTitle.setAttribute("class", "modal-title");
        let modalTitle2 = document.createElement("h4");
        modalTitle2.setAttribute("class", "modal-title");

        let modalbod = document.createElement("div");
        modalbod.setAttribute("class", "modal-body");
        let modalText = document.createElement("p");

        let modalFoot = document.createElement("div");
        modalFoot.setAttribute("class", "modal-footer");
        let modalCerrar = document.createElement("button");
        modalCerrar.setAttribute("class", "btn btn-default");
        modalCerrar.setAttribute("type", "button");
        modalCerrar.setAttribute("data-dismiss", "modal");

        closeButton.innerHTML = "&times;"
        modalTitle.innerHTML = element.name;
        modalTitle2.innerHTML = element.codigo;
        modalText.innerHTML = "Plazo de Plan: " + element.plazo + "<br>" + "<br>" + "Anualidad: " + element.anual + "<br>" + "<br>" +
        "Beneficios: " + element.pros + "<br>" + "<br>" + "Restricciones: " + element.cons + "<br>" + "<br>" + element.com;
        modalCerrar.innerHTML ="Cerrar"
        
        info.appendChild(modalcontainer);
        modalcontainer.appendChild(modaldia);
        modaldia.appendChild(modalContent);
        modalContent.appendChild(modalHead);
        modalHead.appendChild(closeButton);
        modalHead.appendChild(modalTitle);
        modalHead.appendChild(modalTitle2);
        modalContent.appendChild(modalbod);
        modalbod.appendChild(modalText)
        modalContent.appendChild(modalFoot);
        modalFoot.appendChild(modalCerrar);
    });   
    }     
     ); 

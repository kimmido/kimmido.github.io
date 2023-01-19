window.onload = function() {
    const music = document.getElementById('music');
    const musicControl = document.getElementById('musicControl');
    const musicStart = document.getElementById('musicStart');
    const musicCancel = document.getElementById('musicCancel');
    const musicModal = document.getElementById('musicModal');

    musicStart.addEventListener("click", function() {
        toggle = false;
        musicToggle();
        musicModal.style.display = "none";
    })

    musicCancel.addEventListener("click", function() {
        toggle = true;
        musicToggle();
        musicModal.style.display = "none";
    })

    musicControl.addEventListener("click", function() {
        this.style.transform = "scale(0.8)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300)
        musicToggle();
    });

    function musicToggle() {
        toggle = !toggle;
        if(toggle) {
            music.play();
            musicControl.classList.add("play");
        } else {
            music.pause();
            musicControl.classList.remove("play");
        }
    }


    const source = music.querySelector("source");

    function changeAudio(audioName) {
        if(!music.paused) {
            source.setAttribute("src", `./media/Pat_Mat_${audioName}_music.mp3`)
            music.load();
            music.play();
        }
    }

    
    const menu = document.querySelectorAll(".menu");
    const menu1 = document.getElementById("menu1");
    
    console.log(menu);

    let img;
    let src;
    let val;

    for(let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("mouseover", function() {
            img = this.querySelector("img");
            src = img.getAttribute("src");
            val = src.replace(`menu(${i + 1})_shadow`,`menu(${i + 1})`);
            img.setAttribute("src", val);
        })
        
        menu[i].addEventListener("mouseout", function() {
            img = this.querySelector("img");
            src = img.getAttribute("src");
            val = src.replace(`menu(${i + 1})`,`menu(${i + 1})_shadow`);
            img.setAttribute("src", val);
        })
        
    }
    

    const Con01 = document.getElementById("Con1");
    
    menu1.addEventListener("click", function() {
        Con01.classList.add("on");
        changeAudio('menu(1)');
    })
    
    
    const close = document.querySelectorAll(".close");
    
    close.forEach(close => {
        close.onclick = function() {
            close.parentNode.classList.remove("on");
            changeAudio('main');
        }
    });


    const tab = Con01.querySelector(".tab");  
    const tabConList = Con01.querySelectorAll(".tab-con-list");  
    let idx;

    tab.addEventListener("click", function(e) {
        if(e.target.matches("li")) {
            idx =[...this.children].indexOf(e.target);

            [...this.children].forEach(li => {
                li == e.target ?
                li.classList.add("on") :
                li.classList.remove("on")
            });

            tabConList.forEach(conList => {
                [...conList.children].forEach(con => {
                    con == [...conList.children][idx] ?
                    con.classList.add("on") :
                    con.classList.remove("on")
                })
            });
        }
    })
}
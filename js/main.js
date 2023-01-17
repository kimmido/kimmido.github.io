window.onload = function() {

    // **** attitude섹션 내용 생성 및 변경 ****
    const attitude = document.getElementById("attitudeWrap");
    const attitudeImg = attitude.querySelector(".img");
    const attitudeIndex = attitude.querySelector(".index");
    const attitudeTitle = attitude.querySelector(".title > h4");
    const attitudeText = attitude.querySelector(".attitude-txt > p");
    const attitudePrev = attitude.querySelector(".prev");
    const attitudeNext = attitude.querySelector(".next");

    const attitudeData = [
        {
            title : "RECORD",
            txt : "기록은 습관입니다. 스티커 메모를 활용해 빠르게 기록하고 노션을 이용해 일정과 필요한 정보를 정리합니다. 기록은 시간을 절약하고 더 가치있게 사용할 수 있도록 해줍니다."
        },
        {
            title : "VISION",
            txt : ""
        },
        {
            title : "PERSONALITY",
            txt : "엉덩이가 무겁습니다. 고등학생 때는 반순이, 하루 8시간의 작업 중 일어나는 횟수는 평균 3회, 진득하게 앉아 과제에 몰입하는 성향을 가지고 있습니다."
        }
    ]

    // 인덱스 생성
    for(let i = 0; i < attitudeData.length; i++) {
        span = document.createElement("span");
        span.className = "click";
        attitudeIndex.appendChild(span);
    }
    
    // 내용 입력 함수
    function attdConChange(attitudeCounter) {
        console.log(attitudeCounter);

        [...attitudeIndex.children].forEach(idx => {
            idx == [...attitudeIndex.children][attitudeCounter] ?
            idx.classList.add("on") :
            idx.classList.remove("on") 
        });
            
        attitudeTitle.classList.toggle("up");
        attitudeText.classList.toggle("up");
        setTimeout(() => {
            attitudeTitle.innerText = `${attitudeData[attitudeCounter].title}`
            attitudeText.innerText = `${attitudeData[attitudeCounter].txt}`
            attitudeTitle.classList.toggle("up");
            attitudeText.classList.toggle("up");
        }, 600)
        
        attitudeImg.classList.toggle("coverOut");
        setTimeout(() => {
            attitudeImg.style.backgroundImage = `url('./images/attitude(${attitudeCounter}).png')`;
            attitudeImg.classList.toggle("coverOut")
        }, 500)
    };
    
    
    let attitudeCounter = 0;
    attdConChange(attitudeCounter);
    
    // 이전, 다음, 인덱스 버튼 클릭 이벤트
    attitudePrev.onclick = function() {
        attitudeCounter--;
        if(attitudeCounter < 0) { attitudeCounter = 2; }
        attdConChange(attitudeCounter);
    }

    attitudeNext.onclick = function() {
        attitudeCounter++;
        if(attitudeCounter > 2) { attitudeCounter = 0; }
        attdConChange(attitudeCounter);
    }

    attitudeIndex.onclick = function(e) {
        if(e.target.matches('span')) {
            attitudeCounter = [...attitudeIndex.children].indexOf(e.target);
            attdConChange(attitudeCounter);
        }
    }



    // ***** skill섹션 내용요소 생성 *****
    const body = document.querySelector("body");
    const skillList = document.getElementById("skillList");
    
    const cubeInner = ["front", "back", "top", "bottom", "left", "right"]
    const skill = { 
        sk : ["Java script", "SASS", "HTML", "React", "JQuery", "CSS", "Ps", "Ai"],
        desc : [
            "",
            "mixin과 변수를 활용하여 신속하게 효율적으로 코드를 작성할 수 있습니다.",
            "표준에 맞추어 html을 구성하고 접근성을 고려하여 작성할 수 있습니다. 시멘틱 태그를 적절히 사용하며, 태그의 용도를 알기 쉽게 클래스 이름을 부여합니다.", 
            "컴포넌트 간의 관계를 이해하고 구성할 수 있습니다. useState를 이용한 상태관리와 라우터를 활용한 설계를 할 수 있습니다.",
            "",
            "",
            "",
            "다양한 모양을 자유롭게 드로잉할 수 있습니다."
        ]
    }

    // skill큐브 리스트 생성
    let cube = "";

    skill.sk.forEach(sk => {
        cube += '<div class="perspective">';
        cube += '<div class="cube click">';
        cubeInner.forEach(inner => {
            inner == "front" || inner == "back" ?
            cube += `<div class=${inner}><span>${sk}</span></div>` :
            cube += `<div class=${inner}></div>`
        });
        cube += '</div>';
        cube += '</div>';
    });
    skillList.innerHTML = `${cube}`;



    // ********** 헤더 클릭 이벤트 ********** 
    const gnbA = document.querySelectorAll(".gnb li a");
    
    let target;
    let targetTop = [];
 
    gnbA.forEach(a => {
        target = a.getAttribute('href');
        targetTop.push(document.querySelector(target).offsetTop);
    });
     
    // gnb 클릭시 부드러운 이동
    for(let i = 0; i < gnbA.length; i++) {
        gnbA[i].addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({ left: 0, top: targetTop[i] + 1, behavior: "smooth" });
        });
    }
     
    // 로고 클릭시 맨 위로 이동
    const logo = document.querySelector(".logo > a");
     
    logo.onclick = function(e) {
        e.preventDefault();
        console.log(this);
        console.log(e.target);
        console.log(e.currentTarget);
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    };


    // ***** 모바일 메뉴 열고 닫기 *****
    const mMenuBt = document.querySelector(".mobile-menu-bt > .bt-box")
    const mGnb = document.getElementById("mobileGnb");

    mMenuBt.onclick = function() { menuToggle(); }
    mGnb.onclick = function() { menuToggle(); };

    function menuToggle() {
        mMenuBt.classList.toggle('on');
        mGnb.classList.toggle('on');
    } 



    // ********** 마우스 포인터 효과 **********
    const home = document.getElementById("homeWrap");
    const mainCursor = document.getElementById("cursor");
    const homeCursor = document.querySelector(".mouse-pointer");
    const hiddenCon = homeCursor.querySelector(".background-neon");

    document.addEventListener("mouseout", mainCursorOff);
    document.addEventListener("mousemove", mainCursorOn);
    home.addEventListener("mousemove", homeCursorOn);
    home.addEventListener("mouseout", homeCursorOff);
    
    function mainCursorOn(e) {
        mainCursor.classList.add('on');
        
        mainCursor.style.left = e.pageX - 6 + "px";
        mainCursor.style.top = e.pageY - 6 + "px";
        
        if(e.target.matches(".click")) { 
            mainCursor.classList.add('pointer'); 
        } else {
            mainCursor.classList.remove('pointer'); 
        }
    }
    
    function mainCursorOff() {
        mainCursor.classList.remove('on');
    }
    
    // 색상 반전 마우스 포인터 생성
    let hiddenConLeft;
    let hiddenConTop;

    function homeCursorOn(e) {
        if(pos < 1) { e.stopPropagation(); }

        hiddenConLeft = e.pageX - 120;
        hiddenConTop = e.pageY - 120;

        homeCursor.classList.add('scale');
        homeCursor.style.left = hiddenConLeft + "px";
        homeCursor.style.top = hiddenConTop + "px";
        hiddenCon.style.left = -hiddenConLeft + "px";
        hiddenCon.style.top = -hiddenConTop + "px";
    }

    // 색상반전 마우스 포인터 삭제
    function homeCursorOff() {
        homeCursor.classList.remove('scale');
    } 
    
    
    
    // ***** skill섹션 모달 기능 *****
    // skill설명 모달창 열기
    const skillDetail = document.getElementById("skillDetail");
    
    skillList.onclick = function(e) {
        if(e.target.matches(".cube")) {
            let sk = e.target.querySelector(".front > span").innerText;
            let idx = skill.sk.indexOf(sk);
            
            skillDetail.querySelector(".front > span").innerText = sk;
            skillDetail.querySelector(".back > span").innerText = sk;
            skillDetail.querySelector(".txt-inner > p").innerText = skill.desc[idx];
            skillDetail.classList.add("on");
            toggleScroll();
        }
    }
    
    // skill설명 모달창 닫기
    const detailClose = skillDetail.querySelector(".close");

    detailClose.onclick = function(e) {
        skillDetail.classList.remove("on");
        toggleScroll();
    }

    let toggle = false;
    let modalPos;
    function toggleScroll() {
        toggle = !toggle;
        if(toggle) {
            modalPos = document.documentElement.scrollTop;
            body.classList.add("scroll-stop");
            body.style.top = `-${modalPos}px`;
        } else {
            body.classList.remove("scroll-stop");
            body.style.removeProperty("top");
            window.scrollTo(0, modalPos);
        }
    }



    // ****** portfolio섹션 인덱스 클릭시 부드러운 이동 ******
    const portfolio = document.getElementById("portfolioWrap");
    const portfolioItem = portfolio.querySelectorAll(".item-wrap");
    
    (function portfolioIndexMove() {
        const portfolioIndex = portfolio.querySelectorAll(".index");
        let itemNum;
        let itemTop;

        portfolioIndex.forEach(idx => {
            idx.onclick = function(e) {
                if(e.target.matches('span')) {
                    itemNum = [...idx.children].indexOf(e.target);
                    itemTop = portfolioItem[itemNum].offsetTop;
                    window.scrollTo({ left: 0, top: itemTop, behavior: "smooth" });
                }
            }
        });
    })();
    
    (function contactImgEvent() {
        const contact = document.querySelector("#contact > a");
        
        contact.addEventListener("mouseover", function() {
            this.querySelector("img").setAttribute("src", "./images/envelope_open2.svg");
        })
    
        contact.addEventListener("mouseout", function() {
            this.querySelector("img").setAttribute("src", "./images/envelope.svg");
        })
    
        contact.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.8)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 300)
        })
    })();



    // ********** 스크롤 이벤트 ********** 
    window.addEventListener("scroll", scrollEvent);
    
    // let pos = document.documentElement.scrollTop;
    let pos;

    function scrollEvent() {
        pos = document.documentElement.scrollTop;
        
        homeOffMouseEvent();
        gnbLocationPoint();
        aboutTitleMove();
        attitudeConCover();
        portfolioTitleShow();
        portfolioItemUp();
    }
    
    // home섹션 지나면 마우스 포인트 변경
    function homeOffMouseEvent() {
        if(pos > 0) {
            home.style.opacity = 0
            home.style.cursor = "default";
            homeCursorOff();
        } else {
            home.style.opacity = 1
            home.style.cursor = "none";
            mainCursorOff();
        }
    }

    // 섹션 위치에 해당하는 gnb 강조 효과
    targetTop.push(20000);

    function gnbLocationPoint(){
        for(let i = 0; i < gnbA.length; i++) {
            if(pos >= targetTop[i] && pos < targetTop[i + 1]) {
                gnbA[i].previousSibling.previousSibling.classList.add('dot');
            } else {
                gnbA[i].previousSibling.previousSibling.classList.remove('dot');
            }
        }
    } 

    // about섹션 강조글씨 등장
    const aboutTitle = document.querySelector(".about-title");
    let titleIn = document.querySelector("#aboutWrap").offsetTop - (window.innerHeight * 0.6);

    function aboutTitleMove() {
        if(pos > titleIn) {            
            [...aboutTitle.children].forEach(title => {
                title.classList.add("center-in");
            });
        } else {
            [...aboutTitle.children].forEach(title => {
                title.classList.remove("center-in");
            });
        }
    }

    // attitude섹션 내용 커버 여닫기
    function attitudeConCover() {
        if(pos > attitude.offsetTop - (window.innerHeight * 0.2)) {
            attitudeTitle.classList.add("up");
            attitudeText.classList.add("up");
            attitudeImg.classList.add("coverOut");
        } else {
            attitudeTitle.classList.remove("up");
            attitudeText.classList.remove("up");
            attitudeImg.classList.remove("coverOut");
        }
    }
    
    function portfolioTitleShow() {
        if(pos > portfolio.offsetTop - 500) {
            portfolio.getElementsByTagName("h3")[0].style.display = "block";
        } else {
            portfolio.getElementsByTagName("h3")[0].style.display = "none";
        }
    }
    
    // portfolio섹션 등장 이벤트    
    function portfolioItemUp() {
        portfolioItem.forEach(item => {
            let itemUpPOS = item.offsetTop - (window.innerHeight * 0.3);
            
            if(pos > itemUpPOS) {
                item.classList.add("up");
            };
        });
    }
}
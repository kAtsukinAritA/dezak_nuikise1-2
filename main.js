window.onload = () => {
  // #image1に画像を描画
  drawConcat();

  // #image2にテキストを描画
  drawImage1();
  drawImage102();
  drawImage103();
  drawImage104();
  drawImage105();
  drawImage106();
  drawImage107();
  drawImage108();
  drawImage109();
  drawImage110();
  drawImage111();
  drawImage112();
  drawImage113();
  drawImage114();
  drawImage115();
  drawImage116();
  drawImage117();
  drawImage118();
  drawImage119();
  drawImage120();
  drawImage2();
  drawImage202();
  drawImage203();
  drawImage204();
  drawImage205();
  drawImage206();
  drawImage207();
  drawImage208();
  drawImage209();
  drawImage210();
  drawImage211();
  drawImage212();
  drawImage213();


   // 「消しゴム」ボタンを押したらクリア
  document.querySelector("#btn-eraser").addEventListener("click", ()=>{
    eraseCanvas("#concat");
  });

  // 「+」ボタンを押したら合成
  document.querySelector("#btn-concat").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image1"]);
    });
  document.querySelector("#btn-concat102").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image102"]);
    });
  document.querySelector("#btn-concat103").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image103"]);
    });
  document.querySelector("#btn-concat104").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image104"]);
    });
  document.querySelector("#btn-concat105").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image105"]);
    });
  document.querySelector("#btn-concat106").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image106"]);
    });
  document.querySelector("#btn-concat107").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image107"]);
    });
  document.querySelector("#btn-concat108").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image108"]);
    });
  document.querySelector("#btn-concat109").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image109"]);
    });
  document.querySelector("#btn-concat110").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image110"]);
    });
  document.querySelector("#btn-concat111").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image111"]);
    });
  document.querySelector("#btn-concat112").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image112"]);
    });
  document.querySelector("#btn-concat113").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image113"]);
    });
  document.querySelector("#btn-concat114").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image114"]);
    });
  document.querySelector("#btn-concat115").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image115"]);
    });
  document.querySelector("#btn-concat116").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image116"]);
    });
  document.querySelector("#btn-concat117").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image117"]);
    });
  document.querySelector("#btn-concat118").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image118"]);
    });
  document.querySelector("#btn-concat119").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image119"]);
    });
  document.querySelector("#btn-concat120").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image120"]);
    });

   document.querySelector("#btn-concat2").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image2"]);
  });
  document.querySelector("#btn-concat202").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image202"]);
  });
  document.querySelector("#btn-concat203").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image203"]);
  });
  document.querySelector("#btn-concat204").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image204"]);
  });
  document.querySelector("#btn-concat205").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image205"]);
  });
  document.querySelector("#btn-concat206").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image206"]);
  });
  document.querySelector("#btn-concat207").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image207"]);
  });
  document.querySelector("#btn-concat208").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image208"]);
  });
  document.querySelector("#btn-concat209").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image209"]);
  });
  document.querySelector("#btn-concat210").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image210"]);
  });
  document.querySelector("#btn-concat211").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image211"]);
  });
  document.querySelector("#btn-concat212").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image212"]);
  });
  document.querySelector("#btn-concat213").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image213"]);
  });


};

/**
 * [onload] ぬいぐるみ画像を描画
 */
function drawConcat(){
  const Nui = new Image();
  Nui.src = "images/nui.PNG";
  Nui.onload = () =>{
    const canvas = document.querySelector("#concat");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Nui, 0, 0, canvas.width, canvas.height);
  }
}

/**
 * [onload] 洋服を描画
 */
function drawImage1(){
   const Body1 = new Image();
  Body1.src = "images/body01.PNG";
  Body1.onload = () =>{
    const canvas = document.querySelector("#image1");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body1, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage102(){
   const Body2 = new Image();
  Body2.src = "images/body02.PNG";
  Body2.onload = () =>{
    const canvas = document.querySelector("#image102");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body2, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage103(){
   const Body3 = new Image();
  Body3.src = "images/body03.PNG";
  Body3.onload = () =>{
    const canvas = document.querySelector("#image103");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body3, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage104(){
   const Body4 = new Image();
  Body4.src = "images/body04.PNG";
  Body4.onload = () =>{
    const canvas = document.querySelector("#image104");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body4, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage105(){
   const Body5 = new Image();
  Body5.src = "images/body05.PNG";
  Body5.onload = () =>{
    const canvas = document.querySelector("#image105");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body5, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage106(){
   const Body6 = new Image();
  Body6.src = "images/body06.PNG";
  Body6.onload = () =>{
    const canvas = document.querySelector("#image106");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body6, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage107(){
   const Body7 = new Image();
  Body7.src = "images/body07.PNG";
  Body7.onload = () =>{
    const canvas = document.querySelector("#image107");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body7, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage108(){
   const Body8 = new Image();
  Body8.src = "images/body08.PNG";
  Body8.onload = () =>{
    const canvas = document.querySelector("#image108");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body8, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage109(){
   const Body9 = new Image();
  Body9.src = "images/body09.PNG";
  Body9.onload = () =>{
    const canvas = document.querySelector("#image109");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body9, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage110(){
   const Body10 = new Image();
  Body10.src = "images/body10.PNG";
  Body10.onload = () =>{
    const canvas = document.querySelector("#image110");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body10, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage111(){
   const Body11 = new Image();
  Body11.src = "images/body11.PNG";
  Body11.onload = () =>{
    const canvas = document.querySelector("#image111");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body11, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage112(){
   const Body12 = new Image();
  Body12.src = "images/body12.PNG";
  Body12.onload = () =>{
    const canvas = document.querySelector("#image112");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body12, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage113(){
   const Body13 = new Image();
  Body13.src = "images/body13.PNG";
  Body13.onload = () =>{
    const canvas = document.querySelector("#image113");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body13, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage114(){
   const Body14 = new Image();
  Body14.src = "images/body14.PNG";
  Body14.onload = () =>{
    const canvas = document.querySelector("#image114");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body14, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage115(){
   const Body15 = new Image();
  Body15.src = "images/body15.PNG";
  Body15.onload = () =>{
    const canvas = document.querySelector("#image115");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body15, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage116(){
   const Body16 = new Image();
  Body16.src = "images/body16.png";
  Body16.onload = () =>{
    const canvas = document.querySelector("#image116");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body16, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage117(){
   const Body17 = new Image();
  Body17.src = "images/body17.png";
  Body17.onload = () =>{
    const canvas = document.querySelector("#image117");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body17, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage118(){
   const Body18 = new Image();
  Body18.src = "images/body18.png";
  Body18.onload = () =>{
    const canvas = document.querySelector("#image118");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body18, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage119(){
   const Body19 = new Image();
  Body19.src = "images/body19.png";
  Body19.onload = () =>{
    const canvas = document.querySelector("#image119");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body19, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage120(){
   const Body20 = new Image();
  Body20.src = "images/body20.png";
  Body20.onload = () =>{
    const canvas = document.querySelector("#image120");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body20, 0, 0, canvas.width, canvas.height);
  }
}

function drawImage2(){
   const Leg1 = new Image();
  Leg1.src = "images/leg01.PNG";
  Leg1.onload = () =>{
    const canvas = document.querySelector("#image2");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg1, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage202(){
   const Leg2 = new Image();
  Leg2.src = "images/leg02.PNG";
  Leg2.onload = () =>{
    const canvas = document.querySelector("#image202");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg2, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage203(){
   const Leg3 = new Image();
  Leg3.src = "images/leg03.PNG";
  Leg3.onload = () =>{
    const canvas = document.querySelector("#image203");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg3, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage204(){
   const Leg4 = new Image();
  Leg4.src = "images/leg04.PNG";
  Leg4.onload = () =>{
    const canvas = document.querySelector("#image204");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg4, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage205(){
   const Leg5 = new Image();
  Leg5.src = "images/leg05.PNG";
  Leg5.onload = () =>{
    const canvas = document.querySelector("#image205");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg5, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage206(){
   const Leg6 = new Image();
  Leg6.src = "images/leg06.PNG";
  Leg6.onload = () =>{
    const canvas = document.querySelector("#image206");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg6, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage207(){
   const Leg7 = new Image();
  Leg7.src = "images/leg07.png";
  Leg7.onload = () =>{
    const canvas = document.querySelector("#image207");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg7, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage208(){
   const Leg8 = new Image();
  Leg8.src = "images/leg08.png";
  Leg8.onload = () =>{
    const canvas = document.querySelector("#image208");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg8, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage209(){
   const Leg9 = new Image();
  Leg9.src = "images/leg09.png";
  Leg9.onload = () =>{
    const canvas = document.querySelector("#image209");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg9, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage210(){
   const Leg10 = new Image();
  Leg10.src = "images/leg10.png";
  Leg10.onload = () =>{
    const canvas = document.querySelector("#image210");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg10, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage211(){
   const Leg11 = new Image();
  Leg11.src = "images/leg11.png";
  Leg11.onload = () =>{
    const canvas = document.querySelector("#image211");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg11, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage212(){
   const Leg12 = new Image();
  Leg12.src = "images/leg12.png";
  Leg12.onload = () =>{
    const canvas = document.querySelector("#image212");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg12, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage213(){
   const Leg13 = new Image();
  Leg13.src = "images/leg13.png";
  Leg13.onload = () =>{
    const canvas = document.querySelector("#image213");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg13, 0, 0, canvas.width, canvas.height);
  }
}




/**
 * Canvas合成
 *
 * @param {string} base 合成結果を描画するcanvas(id)
 * @param {array} asset 合成する素材canvas(id)
 * @return {void}
 */
 async function concatCanvas(base, asset){
  const canvas = document.querySelector(base);
  const ctx = canvas.getContext("2d");

  for(let i=0; i<asset.length; i++){
    const image1 = await getImagefromCanvas(asset[i]);
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  }
}

/**
 * Canvasをすべて削除する
 *
 * @param {string} target 対象canvasのid
 * @return {void}
 */
function eraseCanvas(target){
  const Nui = new Image();
  Nui.src = "images/nui.PNG";
  Nui.onload = () =>{
    const canvas = document.querySelector("#concat");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Nui, 0, 0, canvas.width, canvas.height);
    }

//   const canvas = document.querySelector(target);
//   const ctx = canvas.getContext("2d");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Canvasを画像として取得
 *
 * @param {string} id  対象canvasのid
 * @return {object}
 */
function getImagefromCanvas(id){
  return new Promise((resolve, reject) => {
    const image = new Image();
    const ctx = document.querySelector(id).getContext("2d");
    image.onload = () => resolve(image);
    image.onerror = (e) => reject(e);
    image.src = ctx.canvas.toDataURL();
  });
}

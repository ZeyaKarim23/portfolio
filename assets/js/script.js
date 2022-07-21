$('#menu i').click(function(){
    let showMenu = $('.vertical-list-item').attr('data-toggle');
    if(showMenu == 'false'){
        $('.vertical-list-item').css('display','block');
        $('.vertical-list-item').attr('data-toggle',true);
    }else{
        $('.vertical-list-item').css('display','none');
        $('.vertical-list-item').attr('data-toggle',false);
    }
});


$('.list-item a').click(function(event){
    event.preventDefault();
   
    let hrefId = $(event.currentTarget).attr('href');
    if(hrefId == '#'){
        return;
    }
    // It will fetch hrefId and Store in targetSectionId
    let targetSectionId = $(hrefId);

    let targetSectionpage = ((targetSectionId)[0].getBoundingClientRect());

    let currentPos = 0;
    let targetSection = targetSectionpage;

    var scrollInterval = setInterval(function(){
        if(currentPos >= targetSection.top){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 50;
        window.scrollBy(0,50);
    },50); 
});


// skill bar filled
let progressBar = $('.skill-progress > div');
// console.log(progressBar)
let skillContainer = $('#skill-container');
window.addEventListener('scroll',checkScroll);


function initialsBar(){
    for(let bar of progressBar){
        bar.style.width = 0 + '%'
    }
}

initialsBar();

function fillBars(){
    for (let bar of progressBar){
        let currentWidth = 0;
        let targerWidth = $(bar).attr('data-bar-width');
        let interval = setInterval(function(){
            if(currentWidth > targerWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%'
        },3);
    } 
}

function fillBar(bar){
    // console.log(bar)
    let currentWidth = 0;
    let targerWidth = $(bar).attr('data-bar-width');
    let interval = setInterval(function(){
        if(currentWidth > targerWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%'
    },3);
}

function checkScroll(){
    // YOU HAVE TO CHECK SKILL SECTION IS VISIBLE
    // let coordinates = skillContainer[0].getBoundingClientRect();

    for(let bar of progressBar){
        let animationDone = $(bar).attr('data-toggle');
        let coordinates = bar.getBoundingClientRect();
        if(animationDone == 'false' && coordinates.top < window.innerHeight){
            fillBar(bar);
            $(bar).attr('data-toggle',true)
            // console.log('skill Bar is visible')
        }
    }  
}

// document.getElementById('card3').addEventListener('click', function(){
//     this.style.left = "-600px";
// })

let reviewers = [
    {
        avatar : 'imgs/image1.jpg',
        fullname : 'Sussan Patrick',
        role : 'Web Developer',
        link : 'https://facebook.com',
        review: 'The services they renderd to me was splendid! I love the cordination'
    },
    {
        avatar : 'imgs/image2.jpg',
        fullname : 'Amadi Goodness',
        role : 'Mobile Developer',
        link : 'https://facebook.com',
        review: 'The best so far in what they do. Keep it up guys. More win to you company'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    },
    {
        avatar : 'imgs/image3.jpg',
        fullname : 'Jude Akpan Eno',
        role : 'UI/UX Designer',
        link : 'https://facebook.com',
        review: 'I am in love with their services and their working environment. Superb!'
    }
]

let cards = '';
let no_reviewers = reviewers.length;

// for (let i = 0; i < no_reviewers; i++) {
    
// }

reviewers.forEach((person, i) => {
    let buttons = '';
    if (i == no_reviewers - 1) { //If it is the last index (no_reviewers - 1)
        buttons = `<button disabled class="slide-left"><i class="fa fa-chevron-left"></i></button>
                   <button onclick="slideCardRight(${i})" class="slide-right"><i class="fa fa-chevron-right"></i></button>`
    }else if(i == 0){//If it is the first index
        buttons = `<button onclick="slideCardLeft(${i})" class="slide-left"><i class="fa fa-chevron-left"></i></button>
                   <button disabled class="slide-right"><i class="fa fa-chevron-right"></i></button>`
    }else{
        buttons = `<button onclick="slideCardLeft(${i})" class="slide-left"><i class="fa fa-chevron-left"></i></button>
                   <button onclick="slideCardRight(${i})" class="slide-right"><i class="fa fa-chevron-right"></i></button>`
    }
    cards += `<div id="${i}" class="cards">
        <div class="img_container">
            <div class="circle sm-circle">
                <i class="fa fa-quote-right"></i>
            </div>
            <div class="circle lg-circle bg-img" style="background-image: url(${person.avatar});"></div>
            <div class="circle lg-circle bg-plain"></div>
        </div>
        <h2 class="pname">
            ${person.fullname}
        </h2>
        <h3 class="prole">
            ${person.role}
        </h3>
        <p class="pdesc">
            ${person.review}
        </p>
        <section class="card-nav">
            ${buttons}
        </section>
        <a href="${person.link}" role="button" class="action-btn">Ask me more</a>
    </div>`;
});

document.getElementById('stack_div').innerHTML = cards;

document.getElementById('0').style.left = "0";

function slideCardLeft(id) {
    document.getElementById(id).style.left = "-600px";
    document.getElementById(id + 1).style.left = "0";
}

function slideCardRight(id) {
    document.getElementById(id).style.left = "600px";
    document.getElementById(id - 1).style.left = "0";
}

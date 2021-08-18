var models = [
    {
        name: 'Bmw',
        image: 'img/car1.png',
        link: 'www.google.com'
    },
    {
        name: 'Bugatti',
        image: 'img/car2.jpg',
        link: 'www.google.com'
    },
    {
        name: 'Mercedes',
        image: 'img/car3.png',
        link: 'www.google.com'
    }

];

var settings = {
    duration: '1000',
    random: false
}


var interval;
var index = 0;
var slaytCount = models.length;
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseout', function () {
        init(settings);
    });
});

function showSlide(i) {
    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);

}

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev) {
                prev == index;
            }
        }
        else {
            //add index
            if (slaytCount == index + 1) {
                index = -1;

            }
            showSlide(index);
            index++;

        }
    }, settings.duration)
}
var item_array = [];
var alternate_url = [];
var max = [];
item_array = [document.getElementById('alternate_0'), document.getElementById('alternate_1'), document.getElementById('alternate_2'), document.getElementById('alternate_3'), document.getElementById('alternate_4'), ];
alternate_url = [document.getElementById('alternate_0_url'), document.getElementById('alternate_1_url'), document.getElementById('alternate_2_url'), document.getElementById('alternate_3_url'), document.getElementById('alternate_4_url'), ];
max = [3, 3, 2.4, 4, 3.3, ];
var recheck_btn = document.getElementById('recheck');
recheck_btn.addEventListener('click', function(e) {
    e.preventDefault();
    do_recheck();
});

function recheck(item, alternate_url, max) {
    item.innerHTML = 0;
    tester(item, getNum(max));
    alternate_url.className += " progressing";
}

function tester(obj, time) {
    var num = parseFloat(obj.innerHTML);
    if (num < time) {
        setTimeout(function() {
            num += 0.01;
            obj.innerHTML = num.toFixed(2);
            this.tester(obj, time);
        }, 10);
    } else if (num >= time) {
        document.getElementById(obj.id + "_url").classList.remove("progressing");
    }
}

function getNum(max = 4) {
    return Math.random() * (max);
}

function do_recheck() {
    for (var key in item_array) {
        recheck(item_array[key], alternate_url[key], max[key]);
    }
}
do_recheck();

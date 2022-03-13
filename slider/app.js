var b = 0

function eded() {
    b++
    if (b <= 20) {
        console.log(b);
        eded()
    }

}
eded()
let num = 143
for (let i = 2; i <= num; i++) {
    let isComposite = false;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isComposite = true;
            break;
        }
    }
    if (isComposite) {
        console.log(i);
    }
}
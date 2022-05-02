function renameFiles(names) {
    let namesCount = new Array(names.length);
    let resArr = [];
    for (let i = 0; i < namesCount.length; i++) {
        namesCount[i] = 0;
    }
    resArr.push(names[0]);

    for (let i = 1; i < names.length; i++) {
        if (names.lastIndexOf(names[i], i - 1) >= 0) {
            let elemFirstIndex = names.indexOf(names[i]);

            namesCount[elemFirstIndex]++;
            resArr.push(names[i] + `(${namesCount[elemFirstIndex]})`);
        } else {
            if (resArr.indexOf(names[i]) >= 0){
                let elemFirstIndex = names.indexOf(names[i]);
                namesCount[elemFirstIndex]++;
                resArr.push(names[i] + `(${namesCount[elemFirstIndex]})`);
            }
            else resArr.push(names[i]);
        }
    }

    return resArr;
}
// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));

function add(x, y) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => x > 0 ? resolve(x + y) : reject('x should be > 0'), 1000)
    })
}

add(1, 2)
    .then(x => add(-5, x))
    .then(res => console.log(`result = ${res}`))
    .catch(err => console.log('ERROR: ' + err))

Promise.all([add(1, 2), add(2, 3), add(5, 5)])
    .then(res => console.log(res))

async function main() {
    try {
        let res = await add(1, 2)
        let res2 = await add(res, 3)
        console.log(res2)
    } catch (e) {
        console.log('ERROR: ' + e)
    }
}

main().then(() => console.log('FINISHED'))

async function printDelayed(elements) {
    for (const element of elements) {
        await delay(200)
        console.log(element)
    }
}

async function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}

printDelayed(['Hello', 'beautiful', 'asynchronous', 'world'])
    .then(() => {
        console.log()
        console.log('Printed every element!')
    })
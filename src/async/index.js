const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something'), 2000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

//Capturar errores
const anotherFuction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFuction()
setTimeout(() => console.log('Afer'), 3000)
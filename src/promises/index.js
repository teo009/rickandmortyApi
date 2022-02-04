const somethinWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Heeeey, Its done')
        } else {
            reject('Upsss, somethin failed')
        }
    });
}

somethinWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

//---------------------------------------------

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Upsss')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))
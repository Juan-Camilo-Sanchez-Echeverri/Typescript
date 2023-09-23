(() => {

  const error = (message: string): never => {

    throw new Error(message)
  }
  error('Error en la linea 9')


})()
import { promises, existsSync } from 'fs';
import { join } from 'path';
const directorioBase = join(__dirname ,"data");

console.log({directorioBase})

const dataHandler = {
  crear: async ({
    directorioEntidad = "usuario",
    nombreArchivo,
    datosGuardar,
  } ) =>
  {
    console.log({directorioEntidad, nombreArchivo, datosGuardar})
    try {
      const fileDescriptor = await promises.open(
        `${directorioBase}/${directorioEntidad}/${nombreArchivo}.json`,
        "wx"
      );
      const datosEnString = JSON.stringify(datosGuardar);
      await promises.writeFile(fileDescriptor, datosEnString);
      return datosGuardar;
    } catch (error) {
      return error;
    }
  },
  obtenerUno: async ({
    directorioEntidad = "usuario",
    nombreArchivo,
    agregarExtension = true,
  }) => {
    try {
      let archivo = null;
      if (agregarExtension) {
        archivo = `${directorioBase}/${directorioEntidad}/${nombreArchivo}.json`;
      } else {
        archivo = `${directorioBase}/${directorioEntidad}/${nombreArchivo}`;
      }
      const resultado = await promises.readFile(archivo, {
        encoding: "utf-8",
      });
      const resultadoJSON = JSON.parse(resultado);
      return resultadoJSON;
    } catch (error) {
      return new Error("No se pudo leer el archivo o no existe");
    }
  },
  listar: async ({ directorioEntidad = "usuario" }) => {
    try {
      let archivos = await promises.readdir(
        `${directorioBase}/${directorioEntidad}/`
      );
      archivos = archivos.filter((file) => file.includes(".json"));
      const arrayPromesasLeerArchivo = archivos.map((archivo) => {
        return dataHandler.obtenerUno({
          directorioEntidad,
          nombreArchivo: archivo,
          agregarExtension: false,
        });
      });
      const datosArchivos = await Promise.all(arrayPromesasLeerArchivo);
      return datosArchivos;
    } catch (error) {
      return new Error(`No se pudo listar desde ${directorioBase}`);
    }
  },
  actualizar: async ({
    directorioEntidad = "usuario",
    nombreArchivo,
    datosActuales,
  }) => {
    try {
      const rutaCompleta = `${directorioBase}/${directorioEntidad}/${nombreArchivo}.json`;
      const existeArchivo = existsSync(rutaCompleta);
      if (!existeArchivo) {
        throw new Error(`La entidad con id = ${nombreArchivo} no existe`);
      }
      const datosAnterioresJSON = await dataHandler.obtenerUno({
        directorioEntidad,
        nombreArchivo,
      });

      const resultadoEliminar = await promises.unlink(rutaCompleta);
      console.log({ resultadoEliminar });

      const fileDescriptor = await promises.open(rutaCompleta, "wx");
      const datosFinalesParaGuardar = {
        ...datosAnterioresJSON,
        ...datosActuales,
      }; //combina los datos actuales y los anteriores
      const datosEnString = JSON.stringify(datosFinalesParaGuardar);
      await promises.writeFile(fileDescriptor, datosEnString);
      return datosFinalesParaGuardar;
    } catch (error) {
      return error;
    }
  },
  eliminar: async ({ directorioEntidad = "usuario", nombreArchivo }) => {
    try {
      const rutaCompleta = `${directorioBase}/${directorioEntidad}/${nombreArchivo}.json`;
      const existeArchivo = existsSync(rutaCompleta);
      if (!existeArchivo) {
        throw new Error(`La entidad con id = ${nombreArchivo} no existe`);
      }
      const resultadoEliminar = await promises.unlink(rutaCompleta);
      return { mensaje: true };
    } catch (error) {
      return error;
    }
  },
};

export default dataHandler;

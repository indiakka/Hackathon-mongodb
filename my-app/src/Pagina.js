import React, { Component } from "react";
require("@babel/core").transformSync("code", {
  presets: ["@babel/preset-react"],
});

export default class Pagina extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/v4-shims.css"
        />
        <link rel="stylesheet" href="./css/styles.css" />

        <div class="container">
          <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/index.html">
                    Usuarios<span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div class="actions-menu">
            <h1>Usuarios</h1>
            <div class="actions-menu-content">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Nueva
              </button>
              <div class="alert alert-danger alert-dismissible" role="alert">
                <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a
                intentarlo!.
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
          <table class="table table-stripped table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="lista-usuarios"></tbody>
          </table>
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Nuevo Usuario
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form id="form">
                  <input type="hidden" id="indice" />
                  <div class="form-row">
                    <div class="col"></div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control"
                        placeholder="username"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="age"
                        name="age"
                        class="form-control"
                        placeholder="age"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        class="form-control"
                        placeholder="city"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  id="btn-guardar"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

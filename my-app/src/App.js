function App() {
  return (
    <>
      <div className="App">
        <head>
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

          <title>Usuarios!</title>
        </head>

        <body>
          <div class="container">
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
              <a class="navbar-brand" href="index.js">
                Usuarios
              </a>
              <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/index.html">
                      Usuarios<span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
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
                  Nuevo Usuario
                </button>
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
              <tbody id="lista-mascotas"></tbody>
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
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form id="form" name="form">
                    <input type="hidden" id="indice" />
                    <div class="form-row">
                      <div class="col">
                        <input
                          type="text"
                          id="Username"
                          name="Username"
                          class="form-control"
                          placeholder="Username"
                        />
                      </div>
                      <div class="form-row">
                        <div class="col">
                          <input
                            type="number"
                            id="Age"
                            name="Age"
                            class="form-control"
                            placeholder="Age"
                            min="1"
                            max="100"
                          />
                        </div>
                        <div class="form-row">
                          <div class="col">
                            <input
                              type="text"
                              id="City"
                              name="City"
                              class="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div>
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
                  </button>{" "}
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
        </body>
      </div>
    </>
  );
}

export default App;

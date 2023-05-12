const Tab = () => {
  return (
    <div className="overflow-x-auto mt-10 mb-10">
      <table className="table  grid place-items-center">
        {/* head */}
        <thead className="mb-10 ">
          <tr>
            <th className="text-xl">MON PROFILE</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Nom : </div>
                </div>
              </div>
            </td>
            <td>MADJDA</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Prénom : </div>
                </div>
              </div>
            </td>
            <td>Rezig</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Email : </div>
                </div>
              </div>
            </td>
            <td>MADJ@gmail.com</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Téléphone : </div>
                </div>
              </div>
            </td>
            <td>09856782</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Date De Naissance : </div>
                </div>
              </div>
            </td>
            <td>1998-08-01</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Mot De Passe : </div>
                </div>
              </div>
            </td>
            <td>************</td>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center space-y-3">
                <div>
                  <div className="font-bold">Genre : </div>
                </div>
              </div>
            </td>
            <td>Femme</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Role : </div>
                </div>
              </div>
            </td>
            <td>Admin</td>
          </tr>
        </tbody>
        <button className="btn btn-wide flex items-center mt-16">
          Modifier
        </button>
      </table>
    </div>
  );
};

export default Tab;

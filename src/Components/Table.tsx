
const Table = () => {
    return (
        <table className="table   table-dark table-hover"  role="button">
            <thead>
            <tr className="fw-bold">
                <th scope="col">#</th>
                <th scope="col">שם פרטי</th>
                <th scope="col">שם משפחה</th>
                <th scope="col">כינוי</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>מארק</td>
                <td>אוטו</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>גייקוב</td>
                <td>טרנטיון</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan={2}>לארי הציפור</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;

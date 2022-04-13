const getUsers = (page) => {
    return Promise.resolve({
        page: 2,
        total: 12,
        data: [
          {
            id: 7,
            email: 'michael.lawson@reqres.in',
            first_name: 'Michael',
            last_name: 'Lawson',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
          },
          {
            id: 8,
            email: 'lindsay.ferguson@reqres.in',
            first_name: 'Lindsay',
            last_name: 'Ferguson',
            avatar: 'https://reqres.in/img/faces/8-image.jpg',
          },
        ]
    });
}

export default {
    getUsers
}
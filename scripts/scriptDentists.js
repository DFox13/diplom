const employees = [
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0499-683x1024.jpg",
        "name": "Желанов Дмитрий Вячеславович",
        "specialty": "Врач высшей категории, хирург, ортопед, ведущий имплантолог"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9535-683x1024.jpg",
        "name": "Сызмас Ирина Валерьевна",
        "specialty": "Врач высшей категории, хирург, пародонтолог, имплантолог"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0699-683x1024.jpg",
        "name": "Сызмас Андрей Валерьевич",
        "specialty": "Врач высшей категории, ортопед, имплантолог."
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9343-683x1024.jpg",
        "name": "Сенчилова Регина Вадимовна",
        "specialty": "Врач-стоматолог общей практики, стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0015-683x1024.jpg",
        "name": "Мулладжанова Екатерина Дильшотовна",
        "specialty": "Врач-стоматолог общей практики"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0116-683x1024.jpg",
        "name": "Купцов Александр Александрович",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9319-683x1024.jpg",
        "name": "Веселкова Мария Дмитриевна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9514-683x1024.jpg",
        "name": "Антипов Михаил Александрович",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2024/04/YARL3568-683x1024.jpg",
        "name": "Ляшенко Елена Александровна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2024/04/YARL3628-683x1024.jpg",
        "name": "Макарова Наталья Васильевна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2020/12/boroznova-695x1024.jpg",
        "name": "Борознова Оксана Вячеславовна",
        "specialty": "Врач-стоматолог общей практики, стоматолог-ортодонт"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0159-683x1024.jpg",
        "name": "Черненкова Кира Андреевна",
        "specialty": "Врач стоматолог общей практики, хирург, пародонтолог, имплантолог"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9815-683x1024.jpg",
        "name": "Хусаинова Илона Игоревна",
        "specialty": "Хирург, имплантолог и пародонтолог"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9801-683x1024.jpg",
        "name": "Ржевцева Ирина Андреевна",
        "specialty": "Гигиенист стоматологический"
    },
    {
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0353-683x1024.jpg",
        "name": "Губанова Мария Леонидовна",
        "specialty": "Гигиенист стоматологический"
    },
    {
        "photo": "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20683%201024%22%3E%3C/svg%3E",
        "name": "Лысенков Владимир Иванович",
        "specialty": "Рентген-лаборант"
    },
    {
        "photo": "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20683%201024%22%3E%3C/svg%3E",
        "name": "Морозова Екатерина Вячеславовна",
        "specialty": "Старшая медсестра"
    },
    {
        "photo": "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20683%201024%22%3E%3C/svg%3E",
        "name": "Сызмас Юлия Николаевна",
        "specialty": "Старший администратор"
    },
    {
        "photo": "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20683%201024%22%3E%3C/svg%3E",
        "name": "Федорова Елена Александровна",
        "specialty": "Координатор центра"
    },
    {
        "photo": "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20683%201024%22%3E%3C/svg%3E",
        "name": "Рымарева Виктория Андреевна",
        "specialty": "Координатор центра"
    }
];

const itemsContainer = document.querySelector('.list_doctors');

employees.forEach(employee => {
    const docItem = document.createElement('div');
    docItem.className = 'one-doctor';
    
    const docImg = document.createElement('img');
    docImg.src = employee.photo;
    
    const docName = document.createElement('p');
    docName.className = 'name';
    docName.textContent = employee.name;

    const docSpecialty = document.createElement('p');
    docSpecialty.className = 'text';
    docSpecialty.textContent = employee.specialty;

    docItem.appendChild(docImg);
    docItem.appendChild(docName);
    docItem.appendChild(docSpecialty);

    itemsContainer.appendChild(docItem);
});
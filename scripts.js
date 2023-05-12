const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'website',
        amount: -500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'app',
        amount: 20000,
        date: '23/01/2021',
    },
]


const Transaction = {
    incomes() {
        //somar as entadas
    },
    expenses() {
        //somar as saidas
    },
    total() {
        //entradas - saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                  <img src="./imagens/lixeira.png" alt="remover transação" style="width: 40px; height: 25px;">
            </td>
        `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}
const itemPrices = {
  tea: 120,
  bottledWater: 100,
  bread: 280
}

const handlingMoneys = [500, 100, 50, 10]

function calcChangeNum(paidMoney, itemName) {
  const moneyNums = []

  if (paidMoney > 1000) {
    throw new Exeption("1000円より大きい金額を支払おうとしています")
  }
  if (!itemPrices[itemName]) {
    throw new Exeption("選択された商品は正しく金額が設定されていません")
  }

  let currentChange = paidMoney - itemPrices[itemName]
  handlingMoneys.forEach(money => {
    moneyNums.push(Math.floor(currentChange / money))
    currentChange = currentChange % money
  })

  return moneyNums
}

console.log(calcChangeNum(1000, "bread"))

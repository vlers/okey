function generatePortfolio() {
    const assets = ["Bitcoin", "Ethereum", "Solana", "BNB", "Avalanche", "Polkadot", "Cardano", "XRP"];
    let portfolio = {};

    assets.forEach(asset => {
        let allocation = (Math.random() * 100).toFixed(2);
        portfolio[asset] = allocation + "%";
    });

    console.log("Ваш випадковий інвестиційний портфель:", portfolio);
}

generatePortfolio();

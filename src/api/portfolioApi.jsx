import axios from "axios";

const portfolioUrl = import.meta.env.VITE_PORTFOLIO_EMAIL_SERVICE_ENDPOINT;

export async function sendContactEmail(data) {
  try {
    const url = `${portfolioUrl}/api/email/sendPortfolioEmail`;

    const response = await axios.post(url, data);

    return response;
  } catch (error) {
    return error;
  }
}

export const welcomeEmail = async (dat: any ) => {
    return {
    subject: 'Welcome to the app',
    html: `<p>Hello ${data.name},</p>
    <p>Welcome to the app!</p>
    <p>We are happy to have you on board.</p>
    <p>Best regards,</p>
    <p>The app team</p>`,
  };
}


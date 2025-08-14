export const emailTemplates: Record<string, (context: any) => string> = {
  otp: (context: { name?: string; otp: string; expiry: number }) => `
    <h1>Hello ${context.name ?? 'User'},</h1>
    <p>Your SprintHub OTP code is: <strong>${context.otp}</strong></p>
    <p>This code expires in ${context.expiry} minutes.</p>
    <p>If you didn't request this, please ignore this email.</p>
    <p>Thanks,<br>SprintHub Team</p>
  `,

  welcome: (context: { name?: string }) => `
    <h1>Welcome ${context.name ?? 'User'}!</h1>
    <p>Thanks for joining SprintHub!</p>
  `,

  // add more templates here...
};

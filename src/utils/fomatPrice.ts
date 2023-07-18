/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export default function formatPrice(num: any) {
  return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

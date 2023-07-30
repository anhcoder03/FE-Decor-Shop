/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import moment from "moment";

export default function convertTimestampToDateTime(timestamp: any) {
  const date: any = moment(timestamp);
  const minutes = date.format("mm");
  const hours = date.format("HH");
  const day = date.format("DD");
  const month = date.format("MM");
  const year = date.format("YYYY");
  return `${day}/${month}/${year}- Lúc ${hours} giờ - ${minutes} phút`;
}

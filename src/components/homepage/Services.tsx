const listService = [
  {
    icon: <i className="fa-solid fa-truck"></i>,
    title: "Giao hàng nhanh chóng",
    text: "Chỉ từ 3 -5 ngày",
  },
  {
    icon: <i className="fa-solid fa-money-check-dollar"></i>,
    title: "Đảm bảo tiền",
    text: "7 ngày trở lại",
  },
  {
    icon: <i className="fa-solid fa-clock-rotate-left"></i>,
    title: "365 ngày",
    text: "Để được trả lại miễn phí",
  },
  {
    icon: <i className="fa-solid fa-building-columns"></i>,
    title: "Sự chi trả",
    text: "Hệ thống an toàn",
  },
];
const Services = () => {
  return (
    <div className="grid grid-cols-4 rounded-lg p-8 bg-[#222222] container mb-10">
      {listService.length > 0 &&
        listService.map((item) => (
          <div
            className="flex items-center justify-center gap-8 pr-8 border-r border-r-slate-400 last:border-none"
            key={item.title}
          >
            <div className="text-3xl text-primary">{item.icon}</div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="text-base font-medium">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Services;

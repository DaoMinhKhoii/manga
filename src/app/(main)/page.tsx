import TopNav from "../../components/home/topNav";
import Image from "next/image";
import Link from "next/link";
import routes from "../../routes";
import Iconify from "../../components/iconify";

import LaptopIllustration from "../../assets/images/laptop.png"
import MangaDexHomepage from "../../assets/images/mangadex-homepage.png"
import ContextImage from "../../assets/images/context.png"
import Collapse from "../../components/collapse";

export default function Home() {
  return (
    <div className=" text-base text-black dark:text-white dark:bg-slate-900">
      <TopNav />
      <section className="relative table w-full py-20 lg:py-44 overflow-hidden z-1">
        <div className="container">
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
              <div className="md:mr-6">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">
                  Một phiên bản bù đắp thiếu sót {" "}
                  <span className="after:absolute after:right-0 after:left-0 after:bottom-3 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">
                    NetTruyen
                  </span>
                </h4>
                <p className="text-slate-400 text-lg max-w-xl">
                  Ở vũ trụ Earth-3041975, NetTrom trở thành ngôi nhà của cả cộng đồng.
                  Nhóm dịch được tôn trọng, độc giả thoải mái công khai mình đọc trên NetTrom mà không cần khúm núm.
                </p>
                <div className="relative mt-8">
                  <Link
                    href={routes.nettrom.index}
                    className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2"
                  >
                    Đọc Trộm Ngay
                  </Link>
                  <a
                    href="https://github.com/zennomi/truyendex"
                    target="_blank"
                    data-id="yba7hPeTSjk"
                    className="btn btn-icon bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                  >
                    <Iconify icon="eva:github-outline" className="text-lg" />
                  </a>
                  <small className="text-sm font-semibold uppercase align-middle ml-2">
                    Source Code
                  </small>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="md:col-span-5">
              <div className="relative after:content-[''] after:absolute after:md:bottom-12 after:-bottom-20 after:lg:-left-0 after:md:-left-20 after:-left-24 after:bg-indigo-600 after:shadow-2xl after:shadow-indigo-600/40 after:-z-1 after:rotate-[130deg] after:w-[75rem] after:md:h-[55rem] after:h-[30rem] after:rounded-[20rem]">
                <Image
                  src={LaptopIllustration}
                  className="lg:max-w-none md:max-w-md"
                  alt=""
                />
              </div>
            </div>
            {/*end col*/}
            <div className="overflow-hidden after:content-[''] after:absolute after:h-32 after:w-32 after:bg-indigo-600/5 after:top-16 after:left-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]" />
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="features"
      >
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Ước mơ
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Tôi đã mơ. Một giấc chiêm bao về Website NetTrom. Đó là nơi...
            </p>
          </div>
          {/*end grid*/}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
            {/* Content */}
            <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Iconify icon="tabler:hexagon-filled" className="h-28 w-28 text-indigo-600/5 mx-auto rotate-[30deg]" />
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <Iconify icon="icon-park-outline:respect" />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Tôn trọng nhóm dịch
                </a>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  Ở đây, các nhóm dịch được đăng truyện và ghi nguồn đầy đủ.
                  Họ toàn quyền kiểm soát công sức mà họ tạo ra.
                  Họ nên được tôn trọng từ những quyền cơ bản nhất.
                </p>
              </div>
            </div>
            {/* Content */}
            {/* Content */}
            <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Iconify icon="tabler:hexagon-filled" className="h-28 w-28 text-indigo-600/5 mx-auto rotate-[30deg]" />
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <Iconify icon="fluent-mdl2:add-group" />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Sức mạnh cộng đồng
                </a>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  Ngoài nhóm dịch, mọi người có thể đóng góp xây dựng mọi thông tin xoay quanh một bộ truyện.
                  Tác giả, hình thức, thể loại... Giả sử tôi muốn đọc RomCom, sao lại lẫn cả NTR vào đây 😭
                </p>
              </div>
            </div>
            {/* Content */}
            {/* Content */}
            <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Iconify icon="tabler:hexagon-filled" className="h-28 w-28 text-indigo-600/5 mx-auto rotate-[30deg]" />
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <Iconify icon="uil:money-bill-slash" />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Phi lợi nhuận
                </a>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  Nguồn tiền vừa đủ duy trì cộng đồng. Không có của cải dư thừa, không xuất hiện chế độ tư hữu.
                  Không có "trâu ăn" để "trâu buộc" ghét. Việc ai người đấy làm vì đam mê.
                </p>
              </div>
            </div>
            {/* Content */}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <Image
                src={ContextImage}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
              />
            </div>
            <div className="lg:ml-8 mt-8 md:mt-0">
              <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Hoàn cảnh lịch sử
              </h4>
              <p className="text-slate-400">
                Đau xót trước cảnh blogtruyen mất, cộng đồng tan rã, đồng thời nhìn thấy những mặt hạn chế của
                các phong trào chống NetTruyen đầu thế kỉ XXI, đã thôi thúc tôi ra đi tìm
                con đường cứu truyện mới cho cộng đồng.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.facebook.com/100063838084923/videos/550876680578076"
                  target="_blank"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Video tình hình <Iconify icon="uil:angle-right-b" className="inline" />
                </a>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <div className="md:mr-10">
                <Image
                  src={MangaDexHomepage}
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt=""
                />
              </div>
              <div className="absolute -bottom-10 right-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                <h5 className="text-lg font-semibold mb-3">MangaDex + NetTruyen</h5>
                <p className="text-slate-400">
                  Hệ thống phía sau website dựa trên API của MangaDex.
                </p>
                <div className="flex justify-between mt-3 mb-2">
                  <span className="text-slate-400">Đang hoàn thiện</span>
                  <span className="text-slate-400">30%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-indigo-600 h-[6px] rounded-full"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:mr-8 order-2 md:order-1 mt-10 md:mt-0">
              <h4 className="mb-4 text-2xl leading-normal font-medium">
                À thôi xàm loz đấy
              </h4>
              <p className="text-slate-400">
                BlogTruyen sau vài thoả thuận mua bán gì đó đã trở lại.
                NetTruyen vẫn cứ ăn cắp như trước, CuuTruyen có thêm chút traffic.
                Độc giả cũng chả quan tâm lắm, tự dưng thấy NetTruyen lại có truyện đều như mọi khi.
                Và thế là tôi nhận ra mình cần:
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex">
                  <Iconify icon="uil:check-circle" className="text-indigo-600 text-xl mr-2" />{" "}
                  Nâng cao nhận thức của độc giả về nhóm dịch
                </li>
                <li className="mb-1 flex">
                  <Iconify icon="uil:check-circle" className="text-indigo-600 text-xl mr-2" />{" "}
                  Pressing NetTruyen đến khi họ không còn là NetTrom nữa
                </li>
                <li className="mb-1 flex">
                  <Iconify icon="uil:check-circle" className="text-indigo-600 text-xl mr-2" />{" "}
                  Làm gì đó cho các nhóm dịch
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href={routes.nettrom.index}
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Trải nghiệm NetTrom <Iconify icon="uil:angle-right-b" className="inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Các câu hỏi thường gặp
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Thật ra NetTruyen không chỉ là NetTruyen.com, NetTruyenTo, NetTruyenZ, NetTruyenPlus, NetTruyenMax,...
              Nó ám chỉ cả một hệ tư tưởng ăn cắp truyện gắn quảng cáo.
            </p>
          </div>
          {/*end grid*/}
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
            <div className="md:col-span-6">
              <Collapse
                title="NetTrom liệu có thể thay thế NetTruyen?"
                content={
                  <>
                    NetTrom là một phiên bản demo cho thấy NetTruyen cần cải thiện điều gì.<br />
                    Tất nhiên NetTrom vẫn đầy đủ các tính năng để trải nghiệm đọc manga không quảng cáo,
                    tải chương với chất lượng ảnh gốc do nhóm dịch đăng tải, tìm truyện với đúng thể loại mong muốn,...
                  </>
                }
              />
            </div>
            {/*end col*/}
            <div className="md:col-span-6">
              <Collapse
                title="Nhóm dịch cũng dịch lậu mà, có gì hay ho mà chửi NetTruyen"
                content={
                  <>
                    Trước hết, bạn vào đây tức là đã và đang đọc truyện lậu nên chúng ta không bàn tới việc bản quyền.<br />
                    99% các nhóm dịch (fan-trans) đều bỏ công sức ra vì sở thích, vì đam mê, vì fame...
                    Vì lý do gì thì cũng chủ yếu là mục đích phi lợi nhuận, nhưng nhờ NetTruyen bê về site
                    họ (có chứa quảng cáo) nên mục đích ấy đã tiếp tay cho NetTruyen tạo lợi nhuận.
                    Mà đã tạo lợi nhuận thì sẽ thành cái gai trong mắt NXB và Đơn Vị Bản Quyền,
                    nên thành ra nhóm dịch vừa bị ăn cắp vừa bị đổ oan.
                  </>
                }
              />
            </div>
            {/*end col*/}
            <div className="md:col-span-6">
              <Collapse
                title="Kệ thôi, tao đọc đâu là việc của tao"
                content={
                  <>
                    Đúng rồi, việc của bạn mà. Mình chỉ muốn nhắc rằng
                    “Không có bữa ăn nào là miễn phí”, những trang truyện
                    mà bạn đã và đang đọc lậu đều là công sức của người dịch, người biên tập,...
                    đóng góp chứ không phải tự dưng nó xuất hiện trên NetTruyen.
                    Có biết ơn thì nên chọn đúng người.
                  </>
                }
              />
            </div>
            <div className="md:col-span-6">
              <Collapse
                title="Đăng nhập trên NetTrom?"
                content={
                  <>
                    Vì hạn chế của API MangaDex hiện tại và
                    mình lười nên chưa có chức năng đăng nhập và theo dõi hehe.
                    À chắc rảnh thì thêm chức năng lưu truyện trên thiết bị,
                    theo dõi theo nhóm dịch… Tương lai xa hơn nữa thì mong
                    API MangaDex có lẽ sẽ hỗ trợ đăng nhập.
                    Hiện tại mình đã tìm hiểu xong kha khá về NextJS 13 và chưa có gì muốn tìm hiểu thêm.
                  </>
                }
              />
            </div>
            <div className="md:col-span-6">
              <Collapse
                title="Bạn rảnh vkl thế"
                content={
                  <>
                    Tính ra mình code cái web này có 1 tuần,
                    chính xác theo tiếng thì chắc khoảng 50 tiếng thôi nên cũng khá rảnh.
                    Nhân dịp mình tìm hiểu về tech ấy mà (NextJS v13, Google Analytics, TailwindCSS,...)
                  </>
                }
              />
            </div>
            <div className="md:col-span-6">
              <Collapse
                title="Chi phí duy trì cái web này"
                content={
                  <>
                    Tên miền: $10.95/month<br />
                    Server: $7/month<br />
                    Khoảng 200k/tháng 🥺<br />

                  </>
                }
              />
            </div>
          </div>
          {/*end grid*/}
        </div>
      </section>

      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Key Features
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Create, collaborate, and turn your ideas into incredible products with the
            definitive platform for digital design.
          </p>
        </div>
        {/*end grid*/}
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
          <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
            <div className="grid grid-cols-1 gap-[30px]">
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-monitor w-5 h-5"
                  >
                    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                    <line x1={8} y1={21} x2={16} y2={21} />
                    <line x1={12} y1={17} x2={12} y2={21} />
                  </svg>
                </div>
                <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                  <h4 className="mb-0 text-lg font-medium">Use On Any Device</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-feather w-5 h-5"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1={16} y1={8} x2={2} y2={22} />
                    <line x1="17.5" y1={15} x2={9} y2={15} />
                  </svg>
                </div>
                <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                  <h4 className="mb-0 text-lg font-medium">Feather Icons</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye w-5 h-5"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </div>
                <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                  <h4 className="mb-0 text-lg font-medium">Retina Ready</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
            <img
              src="assets/images/feature.png"
              className="mx-auto md:max-w-[300px]"
              alt=""
            />
          </div>
          <div className="lg:col-span-4 md:col-span-6 order-3">
            <div className="grid grid-cols-1 gap-[30px]">
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-check w-5 h-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-medium">W3c Valid Code</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-smartphone w-5 h-5"
                  >
                    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                    <line x1={12} y1={18} x2="12.01" y2={18} />
                  </svg>
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-medium">Fully Responsive</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
              <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart w-5 h-5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-medium">Browser Compatibility</h4>
                  <p className="text-slate-400 mt-3">
                    One disadvantage of Lorum Ipsum is that in Latin frequently than
                    others
                  </p>
                </div>
              </div>
              {/*end feature*/}
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
    </div>
  )
}

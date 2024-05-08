const defaultProfile = {
  hovaten: "Hoàng Văn Khang",
  mssv: "20210466",
  namvaotruong: "2021",
  bacdaotao: "KSCLC-TN-TT-VN-ICT",
  chuongtrinh: "Công nghệ thông tin Global ICT 2021",
  khoavienquanli: "Trường Công nghệ thông tin và Truyền thông",
  tinhtranghoctap: "Học",
  gioitinh: "nam",
  lop: "ICT 02-K66",
  khoahoc: "66",
  email: "khang.hv210466@sis.hust.edu.vn"
}

const newProfile = {
  hovaten: "Hoàng Văn Khang",
  mssv: "20210466",
  namvaotruong: "2021",
  bacdaotao: "KSCLC-TN-TT-VN-ICT",
  chuongtrinh: "Công nghệ thông tin Global ICT 2021",
  khoavienquanli: "Trường Công nghệ thông tin và Truyền thông",
  tinhtranghoctap: "Học",
  gioitinh: "nam",
  lop: "ICT 02-K66",
  khoahoc: "66",
  email: "khang.hv210466@sis.hust.edu.vn"
}

function edit_info(){
  document.getElementById("hovaten").innerText = newProfile.hovaten;
  document.getElementById("mssv").innerText = newProfile.mssv;
  document.getElementById("namvaotruong").innerText = newProfile.namvaotruong;
  document.getElementById("bacdaotao").innerText = newProfile.bacdaotao;
  document.getElementById("chuongtrinh").innerText = newProfile.chuongtrinh;
  document.getElementById("khoavienquanli").innerText = newProfile.khoavienquanli;
  document.getElementById("tinhtranghoctap").innerText = newProfile.tinhtranghoctap;
  document.getElementById("gioitinh").innerText = newProfile.gioitinh;
  document.getElementById("lop").innerText = newProfile.lop;
  document.getElementById("khoahoc").innerText = newProfile.khoahoc;
  document.getElementById("email").innerText = newProfile.email;
}

function ok(){
  newProfile.hovaten = document.getElementById("hovaten_edit").value;
  newProfile.mssv = document.getElementById("mssv_edit").value;
  newProfile.namvaotruong = document.getElementById("namvaotruong_edit").value;
  newProfile.bacdaotao = document.getElementById("bacdaotao_edit").value;
  newProfile.chuongtrinh = document.getElementById("chuongtrinh_edit").value;
  newProfile.khoavienquanli = document.getElementById("khoavienquanli_edit").value;
  newProfile.tinhtranghoctap = document.getElementById("tinhtranghoctap_edit").value;
  newProfile.gioitinh = document.getElementById("gioitinh_edit").value;
  newProfile.lop = document.getElementById("lop_edit").value;
  newProfile.khoahoc = document.getElementById("khoahoc_edit").value;
  newProfile.email = document.getElementById("email_edit").value;
  // window.location.href = "index.html";
  edit_info();
}

function cancel(){
  window.location.href = "index.html";
}

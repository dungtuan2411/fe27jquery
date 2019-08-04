$(document).ready(function(){
    var danhSachNguoiDung = new DanhSachNguoiDung();
    $("#btnThemNguoiDung").click(function(){
        var title = "Thêm người dùng";
        var footer = "<button id = 'btnThem' class='btn btn-success'>Thêm</button>";
        $(".modal-title").html(title);
        $(".modal-footer").html(footer);
    });

    $("body").delegate("#btnThem","click" , function(){
        var taiKhoan =  $("#TaiKhoan").val();
        var hoTen =  $("#HoTen").val();
        var matKhau =  $("#MatKhau").val();
        var email =  $("#Email").val();
        var soDT =  $("#SoDienThoai").val(); 
        
        var nguoiDung = new NguoiDung(taiKhoan , hoTen , matKhau , email , soDT);
        // var danhSachNguoiDung = new DanhSachNguoiDung();
        danhSachNguoiDung.themNguoiDung(nguoiDung);
        console.log(nguoiDung);

        taoBang();
    });
    function taoBang(){
        var dsbody = $("#tblDanhSachNguoiDung");
        var content = "";
        // cách 1
        // for(var i = 0 ; i < danhSachNguoiDung.mangNguoiDung.length ; i++){
        //     content += `
        //         <tr>
        //             <td>${i + 1}</td>
        //             <td>${danhSachNguoiDung.mangNguoiDung[i].taiKhoan}</td>
        //             <td>${danhSachNguoiDung.mangNguoiDung[i].hoTen}</td>
        //             <td>${danhSachNguoiDung.mangNguoiDung[i].matKhau}</td>
        //             <td>${danhSachNguoiDung.mangNguoiDung[i].email}</td>
        //             <td>${danhSachNguoiDung.mangNguoiDung[i].soDT}</td>
        //         </tr>
        //     `;
        // }

        // cách 2
        danhSachNguoiDung.mangNguoiDung.map(function(item , index){
            content += `
             <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.hoTen}</td>
                <td>${item.matKhau}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>
                    <button id = "btnCapNhat" class = "btn btn-primary">Sửa</button>
                    <button id = "btnXoa" class = "btn btn-danger">Xóa</button>
                </td>
            </tr>
            `;
        })
    dsbody.html(content);
    }

    function setLocalStorage(){
        localStorage.setItem("mangNguoiDung" , JSON.stringify(danhSachNguoiDung.mangNguoiDung));
    }
    function getLocalStorage(){
        if(localStorage.getItem("mangNguoiDung")){
            danhSachNguoiDung.mangNguoiDung = JSON.parse(localStorage.getItem("mangNguoiDung"));
        }
    }
});
    

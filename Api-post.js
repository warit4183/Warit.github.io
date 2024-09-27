async function submitData() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;

    // สร้างข้อมูลในรูปแบบ JSON
    const data = {
        id: studentId,
        name: studentName
    };

    try {
        const response = await fetch("https://206.189.146.138/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("ส่งสำเร็จ");
        } else {
            alert("ส่งไม่สำเร็จ!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("ส่งไม่สำเร็จ!");
    }
}
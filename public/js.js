document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("package1").addEventListener("change", modificarTacOps1);
    document.getElementById("package2").addEventListener("change", modificarTacOps2);
})

function modificarTacOps1(e) {
    const paquete = e.target.value
    const tacOps = document.getElementsByClassName("tacOps1");
    for (let i = 0; i < tacOps.length; i++) {
        while (tacOps[i].firstChild) {
            tacOps[i].removeChild(tacOps[i].firstChild);
        }
        switch (paquete) {
            case "Seek And Destroy":
                const sd1 = document.createElement("option");
                sd1.id = "Headhunter";
                sd1.text = "Headhunter";
                tacOps[i].appendChild(sd1);
                const sd2 = document.createElement("option");
                sd2.id = "Challenge";
                sd2.text = "Challenge";
                tacOps[i].appendChild(sd2);
                const sd3 = document.createElement("option");
                sd3.id = "Rout";
                sd3.text = "Rout";
                tacOps[i].appendChild(sd3);
                const sd4 = document.createElement("option");
                sd4.id = "Execution";
                sd4.text = "Execution";
                tacOps[i].appendChild(sd4);
                const sd5 = document.createElement("option");
                sd5.id = "Dead Marksman";
                sd5.text = "Dead Marksman";
                tacOps[i].appendChild(sd5);
                const sd6 = document.createElement("option");
                sd6.id = "Rob And Runsack";
                sd6.text = "Rob And Runsack";
                tacOps[i].appendChild(sd6);
                break;
            case "Security":
                const s1 = document.createElement("option");
                s1.id = "Seize Ground";
                s1.text = "Seize Ground";
                tacOps[i].appendChild(s1);
                const s2 = document.createElement("option");
                s2.id = "Hold The Line";
                s2.text = "Hold The Line";
                tacOps[i].appendChild(s2);
                const s3 = document.createElement("option");
                s3.id = "Protect Assets";
                s3.text = "Protect Assets";
                tacOps[i].appendChild(s3);
                const s4 = document.createElement("option");
                s4.id = "Damage Limitation";
                s4.text = "Damage Limitation";
                tacOps[i].appendChild(s4);
                const s5 = document.createElement("option");
                s5.id = "Plant Banner";
                s5.text = "Plant Banner";
                tacOps[i].appendChild(s5);
                const s6 = document.createElement("option");
                s6.id = "Central Control";
                s6.text = "Central Control";
                tacOps[i].appendChild(s6);
                break;
            case "Infiltration":
                const i1 = document.createElement("option");
                i1.id = "Capture Hostage & Infiltrate";
                i1.text = "Capture Hostage & Infiltrate";
                tacOps[i].appendChild(i1);
                const i2 = document.createElement("option");
                i2.id = "Behind Enemy Lines";
                i2.text = "Behind Enemy Lines";
                tacOps[i].appendChild(i2);
                const i3 = document.createElement("option");
                i3.id = "Upload Viral Code";
                i3.text = "Upload Viral Code";
                tacOps[i].appendChild(i3);
                const i4 = document.createElement("option");
                i4.id = "Sabotage";
                i4.text = "Sabotage";
                tacOps[i].appendChild(i4);
                const i5 = document.createElement("option");
                i5.id = "Implant";
                i5.text = "Implant";
                tacOps[i].appendChild(i5);
                const i6 = document.createElement("option");
                i6.id = "Interloper";
                i6.text = "Interloper";
                tacOps[i].appendChild(i6);
                break;
            case "Recon":
                const r1 = document.createElement("option");
                r1.id = "Mark Target";
                r1.text = "Mark Target";
                tacOps[i].appendChild(r1);
                const r2 = document.createElement("option");
                r2.id = "Triangulate";
                r2.text = "Triangulate";
                tacOps[i].appendChild(r2);
                const r3 = document.createElement("option");
                r3.id = "Plant Signal Beacon";
                r3.text = "Plant Signal Beacon";
                tacOps[i].appendChild(r3);
                const r4 = document.createElement("option");
                r4.id = "Vantage";
                r4.text = "Vantage";
                tacOps[i].appendChild(r4);
                const r5 = document.createElement("option");
                r5.id = "Retrival";
                r5.text = "Retrival";
                tacOps[i].appendChild(r5);
                const r6 = document.createElement("option");
                r6.id = "Overrun";
                r6.text = "Overrun";
                tacOps[i].appendChild(r6);
                break;
        }
    }
}

function modificarTacOps2(e) {
    const paquete = e.target.value
    const tacOps = document.getElementsByClassName("tacOps2");
    for (let i = 0; i < tacOps.length; i++) {
        while (tacOps[i].firstChild) {
            tacOps[i].removeChild(tacOps[i].firstChild);
        }
        switch (paquete) {
            case "Seek And Destroy":
                const sd1 = document.createElement("option");
                sd1.id = "Headhunter";
                sd1.text = "Headhunter";
                tacOps[i].appendChild(sd1);
                const sd2 = document.createElement("option");
                sd2.id = "Challenge";
                sd2.text = "Challenge";
                tacOps[i].appendChild(sd2);
                const sd3 = document.createElement("option");
                sd3.id = "Rout";
                sd3.text = "Rout";
                tacOps[i].appendChild(sd3);
                const sd4 = document.createElement("option");
                sd4.id = "Execution";
                sd4.text = "Execution";
                tacOps[i].appendChild(sd4);
                const sd5 = document.createElement("option");
                sd5.id = "Dead Marksman";
                sd5.text = "Dead Marksman";
                tacOps[i].appendChild(sd5);
                const sd6 = document.createElement("option");
                sd6.id = "Rob And Runsack";
                sd6.text = "Rob And Runsack";
                tacOps[i].appendChild(sd6);
                break;
            case "Security":
                const s1 = document.createElement("option");
                s1.id = "Seize Ground";
                s1.text = "Seize Ground";
                tacOps[i].appendChild(s1);
                const s2 = document.createElement("option");
                s2.id = "Hold The Line";
                s2.text = "Hold The Line";
                tacOps[i].appendChild(s2);
                const s3 = document.createElement("option");
                s3.id = "Protect Assets";
                s3.text = "Protect Assets";
                tacOps[i].appendChild(s3);
                const s4 = document.createElement("option");
                s4.id = "Damage Limitation";
                s4.text = "Damage Limitation";
                tacOps[i].appendChild(s4);
                const s5 = document.createElement("option");
                s5.id = "Plant Banner";
                s5.text = "Plant Banner";
                tacOps[i].appendChild(s5);
                const s6 = document.createElement("option");
                s6.id = "Central Control";
                s6.text = "Central Control";
                tacOps[i].appendChild(s6);
                break;
            case "Infiltration":
                const i1 = document.createElement("option");
                i1.id = "Capture Hostage & Infiltrate";
                i1.text = "Capture Hostage & Infiltrate";
                tacOps[i].appendChild(i1);
                const i2 = document.createElement("option");
                i2.id = "Behind Enemy Lines";
                i2.text = "Behind Enemy Lines";
                tacOps[i].appendChild(i2);
                const i3 = document.createElement("option");
                i3.id = "Upload Viral Code";
                i3.text = "Upload Viral Code";
                tacOps[i].appendChild(i3);
                const i4 = document.createElement("option");
                i4.id = "Sabotage";
                i4.text = "Sabotage";
                tacOps[i].appendChild(i4);
                const i5 = document.createElement("option");
                i5.id = "Implant";
                i5.text = "Implant";
                tacOps[i].appendChild(i5);
                const i6 = document.createElement("option");
                i6.id = "Interloper";
                i6.text = "Interloper";
                tacOps[i].appendChild(i6);
                break;
            case "Recon":
                const r1 = document.createElement("option");
                r1.id = "Mark Target";
                r1.text = "Mark Target";
                tacOps[i].appendChild(r1);
                const r2 = document.createElement("option");
                r2.id = "Triangulate";
                r2.text = "Triangulate";
                tacOps[i].appendChild(r2);
                const r3 = document.createElement("option");
                r3.id = "Plant Signal Beacon";
                r3.text = "Plant Signal Beacon";
                tacOps[i].appendChild(r3);
                const r4 = document.createElement("option");
                r4.id = "Vantage";
                r4.text = "Vantage";
                tacOps[i].appendChild(r4);
                const r5 = document.createElement("option");
                r5.id = "Retrival";
                r5.text = "Retrival";
                tacOps[i].appendChild(r5);
                const r6 = document.createElement("option");
                r6.id = "Overrun";
                r6.text = "Overrun";
                tacOps[i].appendChild(r6);
                break;
        }
    }
}


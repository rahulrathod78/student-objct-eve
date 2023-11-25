function Student(name,roll_no,clas,Selection,mark_of_5_subjects){
    this.name=name;
    this.rool_no=roll_no;
    this.class=clas;
    this.mark_of_subjects=marks_of_5_subjects;
}
this.printtop3Subjects=function(){
    const subjects=Object.keys(this.mark_of_5_subjects);
    subjects.sort((a,b)=>this.marks_of_5_subjects[b]- this.mark_of_5_subjects[a]);
    console.log("Top 3 Subjects");
    for(let i=0;i<3;i++){
        console.log(subjects[i])
    }
};

this.printReportCard=function(){
    console.log("+--------------------");
    console.log("|    REPORT CARD    |");
    console.log("+--------------------");
    console.log(`| Name - ${this.name.padEnd(18)}|`);
    console.log(`|Roll no - ${this.roll_no.tostring().padEnd(5)}|`)
    console.log(`|Class - ${this.class.padEnd(10)}|`);
    console.log(`|Section - ${this.Selection.padEnd(10)}|`);
    for (const subject in this.marks_of_5_subjects){
        console.log(`| ${subject.padEnd(8)}-${this.mark_of_5_subjects[subject].tostring().padEnd(4)}|`)
    }
    let totalMarks=Object.values(this.marks_of_5_subjects).reduce((acc,cur)=>acc+cur,0);
    let percentage=(totalMarks /(Object.keys(this.mark_of_5_subjects).length*100)*100);
    console.log(`|Percntage - ${percentage.toFixed(1)}%|`);
    console.log("+--------------------+");
} 
let studentDetails={
    name:"Rahul",
    rool_no:16,
    class:"X"
    section:"A"
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_emwind.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Assign { get; set; }
        [Range(0, 100, ErrorMessage = "Quizzes score must be between 0 and 100")]
        public int Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Group Projects score must be between 0 and 100")]
        public int Group { get; set; }
        [Range(0, 100, ErrorMessage = "INTEX score must be between 0 and 100")]
        public int Intex { get; set; }
        [Range(0, 100, ErrorMessage = "Midterm Exam score must be between 0 and 100")]
        public int Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Final Exam score must be between 0 and 100")]
        public int Final { get; set; }

    }
}

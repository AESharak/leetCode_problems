# Write your MySQL query statement below

with employee_bonus_table as (
    select e.name, b.bonus from Employee e left join Bonus b on b.empId = e.empId
)

select name, bonus from employee_bonus_table where bonus < 1000 or bonus is null;
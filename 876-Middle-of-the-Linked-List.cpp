/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
 #include <iostream>
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode * temp = head;
        int length = 1;
        while (temp-> next){
            temp = temp->next;
            length++;
        }
       temp = head;
       for (int i = 0; i < length / 2; i++){
            temp = temp->next;
       }
        return temp;
    }
};
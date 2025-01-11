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
     ListNode *temp2X = head, *temp1X = head;
        while (temp2X->next) {
            if (temp2X->next->next) {
                temp2X = temp2X->next->next;
            }else {
                temp2X =temp2X->next;
            }
            temp1X = temp1X->next;  
        } 
        return temp1X;
    }
};
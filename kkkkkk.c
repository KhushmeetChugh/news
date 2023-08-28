#include <stdio.h>
#include<stdbool.h>

bool isSubsetSum(int * arr, int sum){
int n=(sizeof(arr)/sizeof(arr[0]));
    printf("n=%d\n",n);
    bool t[n+1][sum+1];
    for(int i=0;i<n+1;i++){
        for(int j=0;j<sum+1;j++){
            if(j==0){
                t[i][j]=true;
            }
            else if(i==0){
                t[i][j]=false;
            }
            else{
                if(arr[i-1]<=j){
                    t[i][j]=(t[i-1][j]||t[i-1][j-arr[i-1]]);
                }
                else{
                    t[i][j]=t[i-1][j];
                }
            }
            printf(" %s",t[i][j]?"true":"false");
        }
        printf("\n");
    }
    return t[n][sum];
}

int main()
{
    int set[] = { 3, 34, 4, 12, 5, 2 };
    int sum = 9;
    
    if (isSubsetSum(set, sum) == true)
        printf("Found a subset with given sum");
    else
        printf("No subset with given sum");
    return 0;
}
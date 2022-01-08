#include <stdio.h>
#include <string.h>  

int main(void)
{
 char input[9];
 scanf("%s", &input);
 
 int i=0;
 while(1) {
  if(input[i] == '\0') {
   break;
  }
  i++;
 }
 char output[(int) i+(i/3)-1];
 // int j=0;
 // while(j < i) {
 //   output[j] = input[j];
 //  if(j%3 == 0) {
 //   output[++j] = ',';
 //  }
 //  j++;
 // }



 // printf("%s\n", output);
 return 0;
}

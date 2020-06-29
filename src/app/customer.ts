export class Customer{
    firstName:string;
    lastName:string;
    
  }

//   <table>
//     <tr>
//         <td>First Name</td>
//         <td>Last Name</td>
//     </tr>
//     <tr *ngFor="let customer of customers;">
//         <td>{{customer.firstName}}</td>
//         <td>{{customer.lastName}}</td>
//     </tr>
// </table>
  
// customers:Customer[]=[{firstName:"2",lastName:"5"}];


// <div class="container"> <h1 class="mt-3 mb-3">Products</h1> 
//     <table class="table table-hover">
//         <thead>
//         <tr>
//             <th>
//     Product Name
//             </th>
//             <th>
//               Category  
//             </th>
//             <th>
//                 Description
//             </th>
//             <th>
//                 Price(Rs.)
//             </th>
//             <th>
//              Availability
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr *ngFor="let product of products">
//             <td>{{product.ProductName}}</td>
//             <td>{{product.Category}}</td>
//             <td>{{product.Description}}</td>
//             <td>{{product.Price}}</td>
//             <td>
//                 <span *ngIf="product.Availability">YES</span>
//                 <span *ngIf="!product.Availability">NO</span>
//                 <!-- {{product.Availability}} -->
//             </td>
//         </tr>
//     </tbody>
    
    
//     </table>
// </div>
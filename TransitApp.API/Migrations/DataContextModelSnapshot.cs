﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TransitApp.API.Data;

namespace TransitApp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4");

            modelBuilder.Entity("TransitApp.API.Models.Stop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("LocationType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ParentStation")
                        .HasColumnType("TEXT");

                    b.Property<int>("StopCode")
                        .HasColumnType("INTEGER");

                    b.Property<string>("StopDesc")
                        .HasColumnType("TEXT");

                    b.Property<int>("StopIdKC")
                        .HasColumnType("INTEGER");

                    b.Property<double>("StopLat")
                        .HasColumnType("REAL");

                    b.Property<double>("StopLon")
                        .HasColumnType("REAL");

                    b.Property<string>("StopName")
                        .HasColumnType("TEXT");

                    b.Property<string>("StopTimezone")
                        .HasColumnType("TEXT");

                    b.Property<string>("StopUrl")
                        .HasColumnType("TEXT");

                    b.Property<int>("ZoneId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Stops");
                });

            modelBuilder.Entity("TransitApp.API.Models.StopTime", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("ArrivalTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("DropOffType")
                        .HasColumnType("TEXT");

                    b.Property<string>("PickupType")
                        .HasColumnType("TEXT");

                    b.Property<double>("ShapeDistTraveled")
                        .HasColumnType("REAL");

                    b.Property<string>("StopHeadsign")
                        .HasColumnType("TEXT");

                    b.Property<int>("StopId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("StopSequence")
                        .HasColumnType("TEXT");

                    b.Property<int>("TripId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("StopId");

                    b.ToTable("StopTimes");
                });

            modelBuilder.Entity("TransitApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<double>("Lat")
                        .HasColumnType("REAL");

                    b.Property<double>("Lon")
                        .HasColumnType("REAL");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TransitApp.API.Models.UserStop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Label")
                        .HasColumnType("TEXT");

                    b.Property<int>("StopId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("StopId");

                    b.HasIndex("UserId");

                    b.ToTable("UserStop");
                });

            modelBuilder.Entity("TransitApp.API.Models.StopTime", b =>
                {
                    b.HasOne("TransitApp.API.Models.Stop", "Stop")
                        .WithMany("StopTimes")
                        .HasForeignKey("StopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TransitApp.API.Models.UserStop", b =>
                {
                    b.HasOne("TransitApp.API.Models.Stop", "Stop")
                        .WithMany("UserStops")
                        .HasForeignKey("StopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TransitApp.API.Models.User", "User")
                        .WithMany("UserStops")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
